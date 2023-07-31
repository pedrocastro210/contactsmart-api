import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/AppError";
import {
  TContactRequest,
  TContactResponse,
} from "../../interfaces/contacts.interfaces";
import { contactsSchema } from "../../schemas/contacts.schemas";

const createContactService = async (
  data: TContactRequest,
  userId: string
): Promise<TContactResponse> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact = contactRepository.create({
    ...data,
    user,
  });

  await contactRepository.save(contact);

  return contactsSchema.parse(contact);
};

export { createContactService };
