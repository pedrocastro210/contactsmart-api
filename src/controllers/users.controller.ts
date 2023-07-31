import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.service";
import { listUserService } from "../services/users/listUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { updateUserService } from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

const listUserController = async (req: Request, res: Response) => {
  const userId: string = res.locals.userId;
  const user = await listUserService(userId);

  return res.json(user);
};

const updateUserController = async (req: Request, res: Response) => {
  const contactId = res.locals.userId;
  const updateContact = await updateUserService(req.body, contactId);

  return res.json(updateContact);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId: string = res.locals.userId;
  await deleteUserService(userId);

  return res.status(204).send();
};

export {
  createUserController,
  listUserController,
  updateUserController,
  deleteUserController,
};
