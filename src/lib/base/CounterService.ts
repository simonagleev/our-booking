import { makeAutoObservable } from "mobx";


export class CounterService {

    adultscount: number = 0

    constructor() {
        makeAutoObservable(this);
    }

    increaseAdults() {
        this.adultscount += 1
    } 
    
    decrease(baseNum: number) {
        this.adultscount -= 1
    }
}    

export default CounterService;