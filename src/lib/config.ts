import CounterService from "./pages/HomePage/CounterService";
import RouterService from "./base/RouterService";
import AlertService from "./base/AlertService";
import ModalService from "./base/ModalService";

import TYPES from "./types";
import { provide } from 'react-declarative';
import CitySearchService from "./pages/HomePage/CitySearchService";
import PersonSerice from "./pages/HomePage/PersonSerice";
import CurrencyService from "./base/CurrencyService";
import AuthService from "./base/AuthService";
import SessionService from "./base/SessionService";
import ErrorService from "./base/ErrorService";
import ApiService from "./base/ApiService";


provide(TYPES.routerService, () => new RouterService());
provide(TYPES.counterService, () => new CounterService());
provide(TYPES.alertService, () => new AlertService())
provide(TYPES.modalService, () => new ModalService())
provide(TYPES.citySearchService, () => new CitySearchService())
provide(TYPES.personSerice, () => new PersonSerice())
provide(TYPES.currencyService, () => new CurrencyService())
provide(TYPES.authService, () => new AuthService())
provide(TYPES.sessionService, () => new SessionService())
provide(TYPES.errorService, () => new ErrorService())
provide(TYPES.apiService, () => new ApiService())
