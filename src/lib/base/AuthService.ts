import { makeAutoObservable } from "mobx";

export class AuthService {

    constructor() {
        makeAutoObservable(this);
    }

    authPopup = () => {
        throw new Error('todo')
    };

    authRedirect = () => {
        throw new Error('todo')
    };

    logoutRedirect = () => {
        throw new Error('todo')
    };

    logout = () => {
        throw new Error('todo')
    };
    
}    

export default AuthService;