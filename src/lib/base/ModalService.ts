import { makeAutoObservable } from "mobx";

export class ModalService {

    registerModal = false;

    constructor() {
        makeAutoObservable(this);
    }

    registerModalOpen() {
        this.registerModal = true;
    }
    
    registerModalClose() {
        this.registerModal = false;
    }
    
}    

export default ModalService;