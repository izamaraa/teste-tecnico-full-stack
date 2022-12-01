import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";

export const authToken = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;
  if (!token) {
    throw new AppError(401, "Token not found");
  }
  token = token.split(" ")[1];
  jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
    (err: any, decoded: any) => {
      if (err) {
        throw new AppError(401, err.message);
      }
      req.clientId = decoded.sub;

      return next();
    }
  );
};
