import { Router } from "express";

const routes = Router();

// importamos os Controllers
import clientCreateController from "../controllers/cliente/clientCreate.controller";
import clientDeleteSelfController from "../controllers/cliente/clientDelete.controller";
import clientListController from "../controllers/cliente/clientList.controller";
import clientLoginController from "../controllers/cliente/clientLogin.controller";
import clientUpdateController from "../controllers/cliente/clientUpdate.controller";
import contactCreateController from "../controllers/contatos/contactCreate.controller";
import listContactController from "../controllers/contatos/listContact.controller";

import { authClient } from "../middlewares/authClient";

routes.post("/clients", clientCreateController);
routes.get("/clients", clientListController);
routes.post("/client/login", clientLoginController);
routes.delete("/client/:id", authClient, clientDeleteSelfController);
routes.patch("/client/:id", authClient, clientUpdateController);

routes.post("/client/contact", authClient, contactCreateController);
routes.get("/client/contacts", authClient, listContactController);
export default routes;
