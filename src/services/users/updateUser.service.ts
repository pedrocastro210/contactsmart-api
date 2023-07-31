import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/AppError";
import { TContactUpdate } from "../../interfaces/contacts.interfaces";
import { TuserResponse } from "../../interfaces/users.interface";
import { userSchema } from "../../schemas/users.schema";

const updateUserService = async (
  data: TContactUpdate,
  userId: string
): Promise<TuserResponse> => {
  const userRepository = AppDataSource.getRepository(User);
  const oldUser = await userRepository.findOneBy({ id: userId });

  if (!oldUser) {
    throw new AppError("User not found", 404);
  }

  const newUserData = userRepository.create({
    ...oldUser,
    ...data,
  });

  await userRepository.save(newUserData);

  return userSchema.parse(newUserData);
};

export { updateUserService };
