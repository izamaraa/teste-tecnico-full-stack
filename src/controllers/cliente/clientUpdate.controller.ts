import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import clientUpdateService from "../../services/cliente/clientUpdate.service";

const clientUpdateController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const { name, email, password, tel } = req.body;
  try {
    const client = await clientUpdateService(id, name, email, password, tel);

    return res.status(201).json({ message: "Client updated!" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default clientUpdateController;
