import { Request, Response } from "express";
import clientCreateService from "../../services/cliente/clientCreate.service";
const clientCreateController = (req: Request, res: Response) => {
  try {
    const { name, email, password, tel } = req.body;

    const newUser = clientCreateService({ name, email, password, tel });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default clientCreateController;
