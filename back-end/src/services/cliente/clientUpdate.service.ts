import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

const clientUpdateService = async (
  id: string,
  name?: string,
  email?: string,
  password?: string,
  tel?: string
) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const me = await clientRepository.findOneBy({ id: id });

  if (!me) {
    throw new AppError(404, "Client not found");
  }
  const newName = name;
  const newEmail = email;
  const newTel = tel;
  let newPassword = undefined;
  if (password) {
    newPassword = bcrypt.hashSync(password, 10);
  }

  const client = await clientRepository.update(me!.id, {
    id: id,
    name: newName,
    email: newEmail,
    password: newPassword ? newPassword : me.password,
    tel: newTel,
  });

  return client;
};

export default clientUpdateService;
