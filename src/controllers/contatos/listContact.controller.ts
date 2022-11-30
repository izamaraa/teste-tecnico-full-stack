import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { Icontact } from "../../interfaces/contato";
import listContactService from "../../services/contato/listContact.service";

const listContactController = async (req: Request, res: Response) => {
  try {
    const contact: Icontact[] = await listContactService();
    return res.status(200).json(contact);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};
export default listContactController;
