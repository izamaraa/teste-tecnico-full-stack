import { Router } from "express";

const routes = Router();

// importamos os Controllers
import clientCreateController from "../controllers/cliente/clientCreate.controller";
import clientListController from "../controllers/cliente/clientList.controller";

routes.post("/clients", clientCreateController);
routes.get("/clients", clientListController);

export default routes;
