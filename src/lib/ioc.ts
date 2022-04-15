
import CounterService from "./pages/HomePage/CounterService";
import RouterService from "./base/RouterService";
import AlertService from "./base/AlertService";
import ModalService from "./base/ModalService";

import "./config"
import TYPES from "./types";
import { inject } from 'react-declarative';
import CitySearchService from "./pages/HomePage/CitySearchService";
import PersonSerice from "./pages/HomePage/PersonSerice";
import CurrencyService from "./base/CurrencyService";
import AuthService from "./base/AuthService";
import SessionService from "./base/SessionService";
import ErrorService from "./base/ErrorService";
import ApiService from "./base/ApiService";
import { CC_DENIED, CC_ERROR, CC_OFFLINE } from "../config";



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
    errorService: inject<ErrorService>(TYPES.errorService),
    apiService: inject<ApiService>(TYPES.apiService),
};

ioc.errorService.permissionsSubject.subscribe(() => {
    ioc.routerService.push(CC_DENIED);
});

ioc.errorService.offlineSubject.subscribe(() => {
    ioc.routerService.push(CC_OFFLINE);
});

ioc.errorService.dieSubject.subscribe(() => {
    ioc.routerService.push(CC_ERROR);
});

(window as any).ioc = ioc;

export default ioc;

