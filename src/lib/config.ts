import CounterService from "./base/CounterService";
import RouterService from "./base/RouterService";

import TYPES from "./types";
import { provide } from 'react-declarative';


provide(TYPES.routerService, () => new RouterService());
provide(TYPES.counterService, () => new CounterService());