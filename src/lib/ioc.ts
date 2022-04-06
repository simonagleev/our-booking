
import CounterService from "./base/CounterService";
import RouterService from "./base/RouterService";

import "./config"
import TYPES from "./types";
import { inject } from 'react-declarative';

export const ioc = {
    routerService: inject<RouterService>(TYPES.routerService),
    counterService: inject<CounterService>(TYPES.counterService),
};

(window as any).ioc = ioc;

export default ioc;
