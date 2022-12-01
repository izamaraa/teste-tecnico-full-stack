import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.find();
  const achouContato = contact.find((conta) => conta.id === id);
  if (achouContato === undefined) {
    throw new AppError(404, "CONTACT NOT FOUND");
  }
  await contactRepository.delete(achouContato!.id);
  return "contact deleted with sucess!";
  // const clientRepository = AppDataSource.getRepository(Client);
  // const findClient = await clientRepository.findOneBy({
  //   id: id,
  // });

  // if (!findClient) {
  //   throw new AppError(404, "Client not found!");
  // }

  // const contactExists = findClient.contacts.find(
  //   (contact) => contact.id === idContact
  // );

  // if (!contactExists) {
  //   throw new AppError(404, "Client contact not found!");
  // }
  // const infoRepository = AppDataSource.getRepository(Contact);

  // await infoRepository.delete({ id: idContact });
};
export default deleteContactService;
