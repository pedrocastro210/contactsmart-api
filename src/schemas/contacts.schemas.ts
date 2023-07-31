import { z } from "zod";

const contactsSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  telephone: z.string(),
  createdAt: z.date(),
});

const contactsSchemaRequest = contactsSchema.omit({
  id: true,
  createdAt: true,
});

const contactsSchemaUpdate = contactsSchema.omit({ id: true }).partial();

const contactsSchemaResponse = z.array(contactsSchema);

export {
  contactsSchema,
  contactsSchemaRequest,
  contactsSchemaResponse,
  contactsSchemaUpdate,
};
