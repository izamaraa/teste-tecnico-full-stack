import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const clientDeleteSelfService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const account = clients.find((client) => client.id === id);

  if (account === undefined) throw new AppError(404, "User not found");

  await clientRepository.delete(account!.id);

  return "User deleted successfully";
};

export default clientDeleteSelfService;
