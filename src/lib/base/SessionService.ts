
import { makeAutoObservable } from "mobx";

import createLsManager from "../../utils/createLsManager";

const storageManager = createLsManager('CC_SESSION_ID');

interface ISessionInfo {
  sessionId: string;
}


export class SessionService {

  sessionId = storageManager.getValue()

  constructor() {
    makeAutoObservable(this);
  };

  dispose = () => {
    storageManager.setValue('');
    this.sessionId = '';
  };

  setSessionId = (sessionId: string, keep = true) => {
    if (keep) {
      storageManager.setValue(sessionId);
    }
    this.sessionId = sessionId;
  };

};

export default SessionService;
