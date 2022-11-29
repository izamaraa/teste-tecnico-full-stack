import { Request, Response } from "express";
import clientListService from "../../services/cliente/clientList.service";

const clientListController = (req: Request, res: Response) => {
  try {
    const users = clientListService();

    return res.send(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default clientListController;
