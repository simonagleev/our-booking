import { makeAutoObservable } from "mobx";

export class ModalService {

    private _registerModal = 0;

    private _loginModal = 0;

    _offline = 0;


    _error = 0;

    get registerModal() {
        return !!this._registerModal;
    };

    get loginModal() {
        return !!this._loginModal;
    };

    get offline() {
        return !!this._offline;
    };

    get error() {
        return !!this._error;
    };

    constructor() {
        makeAutoObservable(this);
    }

    setRegisterModal = (registerModal: boolean) => {
        this._registerModal = Math.max(this._registerModal + (registerModal ? 1 : -1), 0);
    };

    setLoginModal = (loginModal: boolean) => {
        this._loginModal = Math.max(this._loginModal + (loginModal ? 1 : -1), 0);
    };

    setOffline = (offline: boolean) => {
        this._offline = Math.max(this._offline + (offline ? 1 : -1), 0);
    };

    setError = (error: boolean) => {
        this._error = Math.max(this._error + (error ? 1 : -1), 0);
    };

    
}

export default ModalService;