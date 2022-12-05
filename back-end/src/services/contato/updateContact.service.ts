import { AppDataSource } from "../../data-source";

import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const updateContactClientService = async (
  id: string,

  data: any
) => {
  const clientInfoRepository = AppDataSource.getRepository(Contact);

  const contactExists = await clientInfoRepository.findOneBy({
    id,
  });

  if (!contactExists) {
    throw new AppError(400, "Client contact not found!");
  }

  await clientInfoRepository.update(id, {
    ...contactExists,
    ...data,
  });
  return;
};

export default updateContactClientService;
