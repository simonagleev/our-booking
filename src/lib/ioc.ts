
import CounterService from "./base/CounterService";
import RouterService from "./base/RouterService";
import AlertService from "./base/AlertService";
import ModalService from "./base/ModalService";

import "./config"
import TYPES from "./types";
import { inject } from 'react-declarative';



export const ioc = {
    alertService: inject<AlertService>(TYPES.alertService),
    counterService: inject<CounterService>(TYPES.counterService),
    modalService: inject<ModalService>(TYPES.modalService),
    routerService: inject<RouterService>(TYPES.routerService),
};

(window as any).ioc = ioc;

export default ioc;
