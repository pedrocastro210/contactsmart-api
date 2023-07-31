import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/users.schema";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TuserResponse = z.infer<typeof userSchemaResponse>;

export { TUser, TUserRequest, TuserResponse };
