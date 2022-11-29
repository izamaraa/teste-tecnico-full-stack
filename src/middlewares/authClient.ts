import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";

export const authClient = (req: Request, res: Response, next: NextFunction) => {
  let token = req.headers.authorization;
  if (!token) {
    throw new AppError(401, "burro");
  }
  token = token.split(" ")[1];
  jwt.verify(
    token as string,
    process.env.JWT_SECRET as string,
    (err: any, decoded: any) => {
      if (req.params.id === decoded.sub) {
        next();
      } else {
        throw new AppError(403, "nojao");
      }
    }
  );
};
