
import { makeAutoObservable } from "mobx";

import { v4 as uuidv4 } from 'uuid';

import SessionService from "./SessionService";
import ErrorService, { OfflineError } from "./ErrorService";

import { CC_ORIGIN, CC_TOKEN, CC_TRACE_ID } from "../../config";

import TYPES from "../types";
import { inject } from "react-declarative";

type JSON = Record<string, unknown>;


export class ApiService {

  readonly sessionService = inject<SessionService>(TYPES.sessionService);
  readonly errorService = inject<ErrorService>(TYPES.errorService);

  constructor() {
    makeAutoObservable(this);
  };

 
  handleSearchParams = <D = JSON>(url: URL, params?: D) => {
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (typeof value === 'object') {
          url.searchParams.set(key, JSON.stringify(value));
        } else if (typeof value === 'number') {
          url.searchParams.set(key, value.toString());
        } else if (typeof value === 'string') {
          url.searchParams.set(key, value.toString());
        } else {
          throw new Error(`Unknown param type ${key}`);
        }
      }
    }
  };

  
  handleJSON = <T = JSON>(data: string): T => {
    try {
      return JSON.parse(data) as T;
    } catch {
      return {} as T;
    }
  };

  
  public request = <T = JSON, D = JSON>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    url: URL,
    data?: D,
    handleError = true,
  ) => new Promise<T>(async (res, rej) => {
    try {
      const request = await fetch(url.toString(), {
        method,
        headers: {
          ...(this.sessionService.sessionId && ({
            [CC_TOKEN]: this.sessionService.sessionId,
          })),
          'Content-type': 'application/json',
          [CC_TRACE_ID]: uuidv4(),
        },
        ...(data && {
          body: JSON.stringify(data),
        }),
      });
      const text = await request.text();
      const json = this.handleJSON<T>(text);
      this.errorService.processStatusCode(request.status);
      if ('error' in json) {
        rej(json);
      } else {
        res(json);
      }
      if (!window.navigator.onLine) {
        throw new OfflineError();
      }
    } catch (e) {
      if (handleError) {
        this.errorService.handleError(e as Error);
      } else {
        rej(e);
      }
    }
  });


  public get = <T = JSON, D = JSON>(url: URL | string, data?: D, handleError = true): Promise<T> => {
    const targetUrl = typeof url === 'string' ? new URL(url, CC_ORIGIN) : url;
    this.handleSearchParams<D>(targetUrl, data);
    return this.request<T>('GET', targetUrl, undefined, handleError);
  };


  public delete = <T = JSON, D = JSON>(url: URL | string, data?: D, handleError = true): Promise<T> => {
    const targetUrl = typeof url === 'string' ? new URL(url, CC_ORIGIN) : url;
    this.handleSearchParams<D>(targetUrl, data);
    return this.request<T, D>('DELETE', targetUrl, undefined, handleError);
  };


  public post = <T = JSON, D = JSON>(url: URL | string, data?: D, handleError = true): Promise<T> => {
    if (typeof url === 'string') {
      return this.request<T, D>('POST', new URL(url, CC_ORIGIN), data);
    }
    return this.request<T, D>('POST', url, data, handleError);
  };

  
  public put = <T = JSON, D = JSON>(url: URL | string, data?: D, handleError = true): Promise<T> => {
    if (typeof url === 'string') {
      return this.request<T, D>('PUT', new URL(url, CC_ORIGIN), data);
    }
    return this.request<T, D>('PUT', url, data, handleError);
  };

 
  public patch = <T = JSON, D = JSON>(url: URL | string, data?: D, handleError = true): Promise<T> => {
    if (typeof url === 'string') {
      return this.request<T, D>('PATCH', new URL(url, CC_ORIGIN), data);
    }
    return this.request<T, D>('PATCH', url, data, handleError);
  };

  
  public uploadFile = <T = JSON, D = JSON>(url: URL | string, file: File | Blob, data?: D, handleError = true): Promise<T> => new Promise<T>((res) => {
    const formData = new FormData();
    formData.append('file', file);
    data && Object.entries(data).forEach(([k, v]) => {
      formData.append(k, v.toString());
    });
    const xhr = new XMLHttpRequest();
    if (typeof url === 'string') {
      xhr.open('POST', CC_ORIGIN + url, true);
    } else {
      xhr.open('POST', url.toString(), true);
    }
    this.sessionService.sessionId && xhr.setRequestHeader(CC_TOKEN, this.sessionService.sessionId);
    xhr.setRequestHeader(CC_TRACE_ID, uuidv4());
    xhr.onload = () => {
      try {
        const json = this.handleJSON<T>(xhr.responseText);
        this.errorService.processStatusCode(xhr.status);
        if ('error' in json) {
          throw new Error(JSON.stringify(json));
        }
        res(json);
      } catch (e) {
        if (handleError) {
          this.errorService.handleError(e as Error);
        } else {
          throw e;
        }
      }
    };
    xhr.send(formData);
  });

};

export default ApiService;
