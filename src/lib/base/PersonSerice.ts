import { makeAutoObservable } from "mobx";

interface IPerson {
    id: string,
    firstName: string,
    lastName: string,
    dob?: Date,
    contact: number | string,
}


export class PersonSerice {

    constructor() {
        makeAutoObservable(this);
    }

}    

export default PersonSerice;