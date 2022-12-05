import { NextFunction, Request, Response } from "express";

async function authClientMeMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.params.id !== req.clientId) {
    return res.status(403).json({ message: "user is not voce boabao" });
  }
  next();
}

export default authClientMeMiddleware;
