import { makeAutoObservable } from "mobx";
import IUser from "../../model/IUser";


export class PersonSerice {

    peopleList: IUser[] = [];

    access = false;

    constructor() {
        makeAutoObservable(this);
    }

    addUser(person: IUser) {
        this.peopleList.push(person)
    }

    

}    

export default PersonSerice;