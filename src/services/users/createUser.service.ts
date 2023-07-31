import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/users.entities";
import { TUserRequest, TuserResponse } from "../../interfaces/users.interface";
import { AppError } from "../../errors/AppError";
import { userSchemaResponse } from "../../schemas/users.schema";

const createUserService = async (
  data: TUserRequest
): Promise<TuserResponse> => {
  const { name, email, password, telephone } = data;
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOne({
    where: {
      email,
    },
  });
  const findTelephone = await userRepository.findOne({
    where: {
      telephone,
    },
  });

  if (findUser) {
    throw new AppError("User already exists", 409);
  }

  if (findTelephone) {
    throw new AppError("Telephone already exists", 409);
  }

  const hashedPassword = await hash(password, 10);

  const user = userRepository.create({
    name,
    email,
    password: hashedPassword,
    telephone,
  });

  await userRepository.save(user);

  return userSchemaResponse.parse(user);
};

export { createUserService };
