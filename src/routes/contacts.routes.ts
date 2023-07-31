import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contacts,controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.meddleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import {
  contactsSchemaRequest,
  contactsSchemaUpdate,
} from "../schemas/contacts.schemas";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValid(contactsSchemaRequest),
  createContactController
);
contactsRoutes.get("", ensureAuthMiddleware, listContactController);
contactsRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureDataIsValid(contactsSchemaUpdate),
  updateContactController
);
contactsRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  deleteContactController
);

export { contactsRoutes };
