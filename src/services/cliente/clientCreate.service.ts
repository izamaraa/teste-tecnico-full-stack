import { Client } from "../../entities/client.entity";

import { IClientCreate } from "../../interfaces/cliente";

import { AppDataSource } from "../../data-source";

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
    throw new Error("Email already exists");
  }

  const client = new Client();
  client.name = name;
  client.email = email;
  client.tel = tel;
  client.password = password;

  clientRepository.create(client);
  await clientRepository.save(client);
  return client;
};

export default clientCreateService;
