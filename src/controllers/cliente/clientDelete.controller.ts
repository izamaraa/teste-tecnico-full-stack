import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import clientDeleteSelfService from "../../services/cliente/clientDelete.service";

const clientDeleteSelfController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const client = await clientDeleteSelfService(id);

    return res.status(200).json({ message: client });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default clientDeleteSelfController;
