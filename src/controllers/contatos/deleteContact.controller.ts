import { Request, Response } from "express";
import deleteContactService from "../../services/contato/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await deleteContactService(id);
    return res.status(200).json({ message: user });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({
        error: error.name,
        message: error.message,
      });
    }
  }
  //   const id = req.params.id;
  //   console.log(id);
  //   const clientId = req.clientId;
  //   console.log(clientId);

  //   await deleteContactService(id, clientId);

  //   return res.status(200).json({ message: "Contact deleted with sucess!" });
};
export default deleteContactController;
