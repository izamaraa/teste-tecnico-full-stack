import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import clientCreateService from "../../services/cliente/clientCreate.service";
const clientCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, tel } = req.body;

    const newUser = await clientCreateService({ name, email, password, tel });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default clientCreateController;
