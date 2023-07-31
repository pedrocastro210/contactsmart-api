import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  telephone: z.string(),
  createdAt: z.date(),
});

const userSchemaRequest = userSchema.omit({ id: true, createdAt: true });

const userSchemaResponse = userSchema.omit({ password: true });

const userSchemaUpdate = userSchema.partial();

export { userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdate };
