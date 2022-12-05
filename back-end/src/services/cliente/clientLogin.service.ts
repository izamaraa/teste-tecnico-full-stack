import { IClientLogin } from "../../interfaces/cliente";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError";

const clientLoginService = async ({ email, password }: IClientLogin) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const account = clients.find((client) => client.email === email);

  if (!account) {
    throw new AppError(404, "Account not found");
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError(403, "Wrong email/password");
  }

  const token = jwt.sign({ email: email }, String(process.env.JWT_SECRET), {
    expiresIn: "1d",
    subject: account.id,
  });

  return token;
};

export default clientLoginService;
