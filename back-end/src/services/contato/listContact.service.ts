import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";

const listContactService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clientList = await clientRepository.findOne({
    where: { id: clientId },
    relations: { contacts: true },
  });

  return clientList!.contacts;
};
export default listContactService;
