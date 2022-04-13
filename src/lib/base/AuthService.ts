import { makeAutoObservable } from "mobx";
import { useState } from "react";
import ioc from "../ioc";


const createClient = async () => {
         
        
};

export class AuthService {

    constructor() {
        makeAutoObservable(this);
    }

    authPopup = async () => {
        let token: string | false = false;
        try {

            ioc.alertService.push('Signed in successfully');
        } catch (e) {
            ioc.alertService.push('Authorization failed');
            throw e;
        } finally {
          return token;
        }
    };

    authRedirect = async () => {
        try {
          
        
        } catch(e) {
          ioc.alertService.push('Authorization failed');
          throw e;
        }
    };

    logoutRedirect = async () => {
        try {
          
        } catch (e) {
          console.log('logout failed', e);
          
        }
    };

    logout = async () => {
        try {
          
         
          
        } catch (e) {
          console.log('logout failed', e);
          
        }
    };
    
}    

export default AuthService;