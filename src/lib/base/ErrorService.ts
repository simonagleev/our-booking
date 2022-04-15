
import { makeAutoObservable } from "mobx";
import { inject } from "react-declarative";

import { Subject } from "rxjs";

import { CC_DENIED } from "../../config";

import RouterService from "./RouterService";
import SessionService from "./SessionService";
import ModalService from "./ModalService";

import TYPES from "../types";
import AuthService from "./AuthService";

class BaseError { }

const createError = (type: string): typeof BaseError =>
    class extends BaseError {
        type = ''
        constructor() {
            super();
            this.type = type;
        }
    };

export const UnauthorizedError = createError('unauthorized-error');
export const ForbiddenError = createError('forbidden-error');
export const InternalError = createError('internal-error');
export const OfflineError = createError('offline-error');

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const INTERNAL = 500;
const GATEWAY = 504;


export class ErrorService {

    readonly routerService = inject<RouterService>(TYPES.routerService)
    readonly sessionService = inject<SessionService>(TYPES.sessionService);
    readonly modalService = inject<ModalService>(TYPES.modalService);

    permissionsSubject = new Subject<void>();
    offlineSubject = new Subject<void>();
    dieSubject = new Subject<void>();

    constructor() {
        makeAutoObservable(this);
    };

    // @action('errorService _init')
    // _init = () => this.authService.dieSubject
    //     .subscribe(() => this.die());

    processStatusCode = (code: number) => {
        if (code === UNAUTHORIZED) {
            throw new UnauthorizedError();
        } else if (code === FORBIDDEN) {
            throw new ForbiddenError();
        } else if (code === INTERNAL) {
            throw new InternalError();
        } else if (code === GATEWAY) {
            throw new InternalError();
        }
    };


    handleError = (e: Error) => {
        console.log('errorService handleError', e);
        if (e instanceof ForbiddenError) {
            this.routerService.push(CC_DENIED);
        } else if (e instanceof InternalError) {
            this.die();
        } else if (e instanceof UnauthorizedError) {
            this.logout();
        } else if (e instanceof OfflineError) {
            this.offline();
        } else {
            this.die();
        }
    };


    die = () => {
        console.error('errorService die')
        this.modalService.setError(true);
        this.dieSubject.next();
    };

   
    offline = () => {
        this.modalService.setOffline(true);
        this.offlineSubject.next();
    };

    logout = async () => {
        if (this.sessionService.sessionId) {
            this.permissionsSubject.next();
        }
    };

};

export default ErrorService;
