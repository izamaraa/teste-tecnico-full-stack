import { Request, Response, NextFunction } from "express";
import { AppError, handleError } from "../../errors/appError";
import clientLoginService from "../../services/cliente/clientLogin.service";
import jwt from "jsonwebtoken";
const clientLoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
