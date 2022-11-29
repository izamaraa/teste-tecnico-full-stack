import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import clientLoginService from "../../services/cliente/clientLogin.service";

const clientLoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const token = await clientLoginService({ email, password });

    return res.status(201).json({ token });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default clientLoginController;
