import { Request, Response } from "express";
import updateContactClientService from "../../services/contato/updateContact.service";

const updateContactClientController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const data = req.body;
  console.log(data);
  try {
    await updateContactClientService(id, data);
    return res.status(200).json({ message: "Contact updated with sucess!" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(404).send({
        error: error.name,
        message: error.message,
      });
    }
  }
};

export default updateContactClientController;
