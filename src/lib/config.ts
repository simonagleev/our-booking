import CounterService from "./base/CounterService";
import RouterService from "./base/RouterService";
import AlertService from "./base/AlertService";
import ModalService from "./base/ModalService";

import TYPES from "./types";
import { provide } from 'react-declarative';


provide(TYPES.routerService, () => new RouterService());
provide(TYPES.counterService, () => new CounterService());
provide(TYPES.alertService, () => new AlertService())
provide(TYPES.modalService, () => new ModalService())