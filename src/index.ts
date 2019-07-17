import { app } from './App';

import { registerRoutesFor } from "./routes";
import { registerControllerFor } from "./controllers";
import { registerServices } from "./services";

registerRoutesFor(app);
registerControllerFor(app);
registerServices(app);