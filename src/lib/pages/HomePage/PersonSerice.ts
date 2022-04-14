import { makeAutoObservable } from "mobx";
import { RowId } from "react-declarative";
import IUser from "../../../model/IUser";
import { v4 as uuidv4 } from 'uuid';

export class PersonSerice {

    peopleList: IUser[] = [];

    person: IUser = {     
        id: '',
        firstName: '',
        lastName: '',
        DOB: '',
        phone: '',
        password: '',
        confirmPassword: '',
        remember: false,
        terms: false,
    } 

    userData: IUser | null = null;

    url = 'http://localhost:3000/users';

    access = false;

    constructor() {
        makeAutoObservable(this);
    }

    addUser(person: IUser) {
        this.peopleList.push(person)
    }

    createUser(person: IUser) {
        this.person = person
        this.person.id = uuidv4();
    }

    getUserData(data: IUser) {
        this.userData = data
    }

    clearUserData(data: IUser) {
        this.userData = null
    }

    passwordValidation = (password: string, confirmPassword: string): boolean => password === confirmPassword;

    postUser = (personData: IUser) => {
        fetch(this.url, {                                  
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(personData)
        })
    }

    onUserRegister = () => {
        if(this.userData) {
          if (!this.passwordValidation(this.userData.password, this.userData.confirmPassword) || this.userData.password == '') {
            console.log('Ошибка Валидации')
          return
          } else {
            this.createUser(this.userData)
            console.log(this.userData)
            console.log('User создан')
            this.postUser(this.person)
            this.clearUserData(this.userData)
          }
        } else {
          console.log('userdata is Empty')
        }
    }  
}    

export default PersonSerice;