import CounterService from "./base/CounterService";
import RouterService from "./base/RouterService";
import AlertService from "./base/AlertService";

import TYPES from "./types";
import { provide } from 'react-declarative';



provide(TYPES.routerService, () => new RouterService());
provide(TYPES.counterService, () => new CounterService());
provide(TYPES.alertService, () => new AlertService())