import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactService } from "../services/contacts/listContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const newContact = await createContactService(req.body, userId);

  return res.status(201).json(newContact);
};

const listContactController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const contacts = await listContactService(userId);

  return res.json(contacts);
};

const updateContactController = async (req: Request, res: Response) => {
  const contactId = req.params.id;
  const updateContact = await updateContactService(req.body, contactId);

  return res.json(updateContact);
};

const deleteContactController = async (req: Request, res: Response) => {
  const contactId = req.params.id;
  await deleteContactService(contactId);

  return res.status(204).send();
};

export {
  createContactController,
  listContactController,
  updateContactController,
  deleteContactController,
};
