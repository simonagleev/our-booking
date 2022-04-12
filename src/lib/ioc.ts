
import CounterService from "./base/CounterService";
import RouterService from "./base/RouterService";
import AlertService from "./base/AlertService";
import ModalService from "./base/ModalService";

import "./config"
import TYPES from "./types";
import { inject } from 'react-declarative';
import CitySearchService from "./base/CitySearchService";



export const ioc = {
    alertService: inject<AlertService>(TYPES.alertService),
    counterService: inject<CounterService>(TYPES.counterService),
    modalService: inject<ModalService>(TYPES.modalService),
    routerService: inject<RouterService>(TYPES.routerService),
    citySearchService: inject<CitySearchService>(TYPES.citySearchService),
};

(window as any).ioc = ioc;

export default ioc;
