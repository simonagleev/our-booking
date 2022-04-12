import { makeAutoObservable } from "mobx";
import { RowId } from "react-declarative";
import IUser from "../../model/IUser";


export class PersonSerice {

    peopleList: IUser[] = [];
    // innerProfiles = new Map<RowId, IUser>(this.peopleList.map(p => [p.id, p]))
    
    access = false;

    constructor() {
        makeAutoObservable(this);
    }

    addUser(person: IUser) {
        this.peopleList.push(person)
    }

    // one(id: string) {
    //     if (id === 'create') {
    //       return null;
    //     } else {
    //       return this.innerProfiles.set(id) || null;
    //     }
    // };
    

}    

export default PersonSerice;