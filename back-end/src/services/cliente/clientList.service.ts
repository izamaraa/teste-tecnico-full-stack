import { Client } from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";

const clientListService = async () => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clients = clientRepository.find();
  return clients;
};

export default clientListService;
