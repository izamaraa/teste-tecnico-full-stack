import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";

const listContactService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contactList = await contactRepository.find();
  return contactList;
};
export default listContactService;
