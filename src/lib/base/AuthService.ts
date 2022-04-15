import { makeAutoObservable } from "mobx";

import { inject } from "react-declarative";

import IUser from "../../model/IUser";
import TYPES from "../types";
import ApiService from "./ApiService";

export class AuthService {

    apiService = inject<ApiService>(TYPES.apiService);

    allUsers: IUser[] = [];

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

    getAllUsers = () => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => {
                this.allUsers = data
                console.log(data)
            })
    }

    auth = async(id: string) => {

        await this.getAllUsers();

        console.log('auth test')

        if(this.allUsers.length > 0) {
            for (let i of this.allUsers) {
                if(i.id === id) {
                    console.log('Ты авторизовался')
                } else {
                    console.log('Нет ID')
                }
            }
        } else {
            console.log('Нет allUsers')
        }
    }
}

export default AuthService;