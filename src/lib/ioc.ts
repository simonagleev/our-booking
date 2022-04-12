
import CounterService from "./base/CounterService";
import RouterService from "./base/RouterService";
import AlertService from "./base/AlertService";
import ModalService from "./base/ModalService";

import "./config"
import TYPES from "./types";
import { inject } from 'react-declarative';
import CitySearchService from "./base/CitySearchService";
import PersonSerice from "./base/PersonSerice";
import CurrencyService from "./base/CurrencyService";



export const ioc = {
    alertService: inject<AlertService>(TYPES.alertService),
    counterService: inject<CounterService>(TYPES.counterService),
    modalService: inject<ModalService>(TYPES.modalService),
    routerService: inject<RouterService>(TYPES.routerService),
    citySearchService: inject<CitySearchService>(TYPES.citySearchService),
    personSerice: inject<PersonSerice>(TYPES.personSerice),
    сurrencyService: inject<CurrencyService>(TYPES.сurrencyService),
};

(window as any).ioc = ioc;

export default ioc;
