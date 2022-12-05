import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entity";

async function authContactClientMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({
    where: { id: req.params.id },
    relations: { client: true },
  });

  if (contact?.client.id !== req.clientId) {
    return res.status(403).json({ message: "user is not voce boabao" });
  }
  next();
}

export default authContactClientMiddleware;
