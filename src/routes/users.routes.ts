import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/users.controller";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.meddleware";

const userRoutes = Router();

userRoutes.post("", ensureDataIsValid(userSchemaRequest), createUserController);
userRoutes.get("", ensureAuthMiddleware, listUserController);
userRoutes.patch(
  "",
  ensureAuthMiddleware,
  ensureDataIsValid(userSchemaUpdate),
  updateUserController
);
userRoutes.delete("", ensureAuthMiddleware, deleteUserController);

export { userRoutes };
