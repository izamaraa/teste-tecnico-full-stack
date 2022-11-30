import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { IcontactClient } from "../../interfaces/contato";
import { Client } from "../../entities/client.entity";

const contractCreateService = async ({
  clientId,
  name,
  email,
  tel,
}: IcontactClient) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);
  const clientExists = await clientRepository.findOne({
    where: { id: clientId },
  });
  const contactAlreadyExists = await contactRepository.findOne({
    where: { email },
  });
  if (contactAlreadyExists) {
    throw new AppError(400, "Contact already exists");
  }

  const contact = new Contact();
  contact.name = name;
  contact.email = email;
  contact.tel = tel;
  contact.client = clientExists!;

  contactRepository.create(contact);

  await contactRepository.save(contact);

  return contact;
};

export default contractCreateService;
