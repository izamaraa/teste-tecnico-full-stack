import { clients } from "../../database";

import { IClientCreate, IClient } from "../../interfaces/cliente";

import { v4 as uuidv4 } from "uuid";

const clientCreateService = ({ name, email, tel, password }: IClientCreate) => {
  const emailAlreadyExists = clients.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }

  const newClient: IClient = {
    id: uuidv4(),
    name,
    email,
    tel,
    password,
    dateCreated: new Date(),
  };

  clients.push(newClient);
  return newClient;
};

export default clientCreateService;
