import { makeAutoObservable } from "mobx";

import { inject } from "react-declarative";
import { string } from "yup";

import IUser from "../../model/IUser";
import TYPES from "../types";
import ApiService from "./ApiService";
import SessionService from "./SessionService";

export class AuthService {

    apiService = inject<ApiService>(TYPES.apiService);
    sessionService = inject<SessionService>(TYPES.sessionService);


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
    
    auth = async(phone: string, password: string, remember: boolean) => {
        const data = await this.apiService.get<IUser[]>('http://localhost:3000/users');
        const targetUser = data.find((user) => user.phone === phone && user.password === password);
        
        if (targetUser) {
            this.sessionService.setSessionId(targetUser.id, remember);
        } else { 
            console.log('no target user')
        }
    }
}

export default AuthService;
