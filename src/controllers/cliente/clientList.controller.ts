import { Request, Response } from "express";
import clientListService from "../../services/cliente/clientList.service";

const clientListController = async (req: Request, res: Response) => {
  try {
    const clients = await clientListService();

    return res.send(clients);
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
