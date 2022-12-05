import { Client } from "../../entities/client.entity";
import { IClientCreate } from "../../interfaces/cliente";
import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

const clientCreateService = async ({
  name,
  email,
  tel,
  password,
}: IClientCreate) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();
  const emailAlreadyExists = clients.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(409, "Email already exists");
  }

  const client = new Client();
  client.name = name;
  client.email = email;
  client.tel = tel;
  client.password = bcrypt.hashSync(password, 10);
  // client.contacts = contacts;

  clientRepository.create(client);
  await clientRepository.save(client);
  return client;
};

export default clientCreateService;
