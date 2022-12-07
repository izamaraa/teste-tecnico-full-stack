import { Router } from "express";

const routes = Router();

import clientCreateController from "../controllers/cliente/clientCreate.controller";
import clientDeleteSelfController from "../controllers/cliente/clientDelete.controller";
import clientListController from "../controllers/cliente/clientList.controller";
import clientLoginController from "../controllers/cliente/clientLogin.controller";
import clientUpdateController from "../controllers/cliente/clientUpdate.controller";

import contactCreateController from "../controllers/contatos/contactCreate.controller";
import listContactController from "../controllers/contatos/listContact.controller";
import deleteContactController from "../controllers/contatos/deleteContact.controller";

import { authToken } from "../middlewares/authToken";
import updateContactClientController from "../controllers/contatos/updatedContact.controller";
import authContactClientMiddleware from "../middlewares/authContactClient";
import authClientMeMiddleware from "../middlewares/authClientMe";
import clientListIdController from "../controllers/cliente/clientListid.controller";

routes.post("/client", clientCreateController);
routes.get("/clients", clientListController);
routes.get("/client/me", authToken, clientListIdController);
routes.post("/client/login", clientLoginController);
routes.delete(
  "/client/:id",
  authToken,
  authClientMeMiddleware,
  clientDeleteSelfController
);
routes.patch(
  "/client/:id",
  authToken,
  authClientMeMiddleware,
  clientUpdateController
);

routes.post("/client/contact", authToken, contactCreateController);
routes.get("/client/contacts", authToken, listContactController);

routes.delete(
  "/client/delete/contact/:id",
  authToken,
  authContactClientMiddleware,
  deleteContactController
);
routes.patch(
  "/client/update/contact/:id",
  authToken,
  authContactClientMiddleware,
  updateContactClientController
);
export default routes;
