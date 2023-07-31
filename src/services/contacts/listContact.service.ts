import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/AppError";
import { TContactsResponse } from "../../interfaces/contacts.interfaces";
import { contactsSchemaResponse } from "../../schemas/contacts.schemas";

const listContactService = async (
  userId: string
): Promise<TContactsResponse | string> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return contactsSchemaResponse.parse(user.contacts);
};

export { listContactService };
