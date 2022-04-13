import { makeAutoObservable } from "mobx";
import { RowId } from "react-declarative";
import IUser from "../../model/IUser";
import { v4 as uuidv4 } from 'uuid';

export class PersonSerice {

    peopleList: IUser[] = [];
    // innerProfiles = new Map<RowId, IUser>(this.peopleList.map(p => [p.id, p]))

    person: IUser = {     
        id: '123',
        firstName: 'Boba',
        lastName: 'Fet',
        DOB: '12.12.1992',
        phone: 88005553535,
        password: '123456'
    } 

    // person = {
        // id: '123',
        // firstName: 'Boba',
        // lastName: 'Fet',
        // DOB: '12.12.1992',
        // phone: 88005553535,
        // password: '123456'
    // }

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

    createPerson(person: IUser) {
   
        this.person = person
        this.person.id = uuidv4();
    }

}    

export default PersonSerice;