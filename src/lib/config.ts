import CounterService from "./base/CounterService";
import RouterService from "./base/RouterService";
import AlertService from "./base/AlertService";
import ModalService from "./base/ModalService";

import TYPES from "./types";
import { provide } from 'react-declarative';
import CitySearchService from "./base/CitySearchService";
import PersonSerice from "./base/PersonSerice";
import CurrencyService from "./base/CurrencyService";


provide(TYPES.routerService, () => new RouterService());
provide(TYPES.counterService, () => new CounterService());
provide(TYPES.alertService, () => new AlertService())
provide(TYPES.modalService, () => new ModalService())
provide(TYPES.citySearchService, () => new CitySearchService())
provide(TYPES.personSerice, () => new PersonSerice())
provide(TYPES.сurrencyService, () => new CurrencyService())

