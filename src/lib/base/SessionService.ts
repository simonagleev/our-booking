
import { makeAutoObservable } from "mobx";

import createLsManager from "../../utils/createLsManager";

const storageManager = createLsManager('CC_SESSION_ID');

interface ISessionInfo {
  sessionId: string;
}


export class SessionService {

  readonly sessionInfo: ISessionInfo = {
    sessionId: storageManager.getValue(),
  };

  get sessionId() {
    return this.sessionInfo.sessionId;
  };

  constructor() {
    makeAutoObservable(this);
  };

  dispose = () => {
    storageManager.setValue('');
    this.sessionInfo.sessionId = '';
  };

  setSessionId = (sessionId: string, keep = true) => {
    if (keep) {
      storageManager.setValue(sessionId);
    }
    this.sessionInfo.sessionId = sessionId;
  };

};

export default SessionService;
