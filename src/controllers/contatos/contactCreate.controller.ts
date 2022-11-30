import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { Icontact } from "../../interfaces/contato";
import contactCreateService from "../../services/contato/createContact.service";

const contactCreateController = async (req: Request, res: Response) => {
  try {
    const contact = { ...req.body, clientId: req.clientId };
    const createContact: Icontact = await contactCreateService(contact);
    return res.status(201).json(createContact);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default contactCreateController;
