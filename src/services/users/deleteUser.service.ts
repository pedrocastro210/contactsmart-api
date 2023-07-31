import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contacts.entities";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const user: User | null = await userRepository.findOne({
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

  await contactRepository.remove(user.contacts);
  await userRepository.remove(user);
};

export { deleteUserService };
