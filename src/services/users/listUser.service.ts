import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { AppError } from "../../errors/AppError";
import { TuserResponse } from "../../interfaces/users.interface";
import { userSchemaResponse } from "../../schemas/users.schema";

const listUserService = async (userId: string): Promise<TuserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return userSchemaResponse.parse(user);
};

export { listUserService };
