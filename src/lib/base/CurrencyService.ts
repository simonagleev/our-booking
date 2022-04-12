import { makeAutoObservable } from "mobx";

export class CurrencyService {

    constructor() {
        makeAutoObservable(this);
    }
}    

export default CurrencyService;