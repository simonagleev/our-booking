
import CounterService from "./otherServices/CounterService";
import RouterService from "./base/RouterService";
import AlertService from "./base/AlertService";
import ModalService from "./base/ModalService";

import "./config"
import TYPES from "./types";
import { inject } from 'react-declarative';
import CitySearchService from "./otherServices/CitySearchService";
import PersonSerice from "./otherServices/PersonSerice";
import CurrencyService from "./base/CurrencyService";
import AuthService from "./base/AuthService";
import SessionService from "./base/SessionService";



export const ioc = {
    alertService: inject<AlertService>(TYPES.alertService),
    counterService: inject<CounterService>(TYPES.counterService),
    modalService: inject<ModalService>(TYPES.modalService),
    routerService: inject<RouterService>(TYPES.routerService),
    citySearchService: inject<CitySearchService>(TYPES.citySearchService),
    personSerice: inject<PersonSerice>(TYPES.personSerice),
    currencyService: inject<CurrencyService>(TYPES.currencyService),
    authService: inject<AuthService>(TYPES.authService),
    sessionService: inject<SessionService>(TYPES.sessionService),
};

(window as any).ioc = ioc;

export default ioc;
