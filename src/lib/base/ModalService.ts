import { makeAutoObservable } from "mobx";

export class ModalService {

    registerModalSate = false;

    constructor() {
        makeAutoObservable(this);
    }

    registerModalOpen() {
        this.registerModalSate = true;
    }
    
    registerModalClose() {
        this.registerModalSate = false;
    }
    
}    

export default ModalService;