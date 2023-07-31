import { z } from "zod";
import {
  contactsSchema,
  contactsSchemaRequest,
  contactsSchemaResponse,
  contactsSchemaUpdate,
} from "../schemas/contacts.schemas";
import { DeepPartial } from "typeorm";

type TContactRequest = z.infer<typeof contactsSchemaRequest>;
type TContact = z.infer<typeof contactsSchema>;
type TContactResponse = z.infer<typeof contactsSchema>;
type TContactsResponse = z.infer<typeof contactsSchemaResponse>;
type TContactUpdate = DeepPartial<TContactRequest>;

export {
  TContactRequest,
  TContact,
  TContactResponse,
  TContactsResponse,
  TContactUpdate,
};
