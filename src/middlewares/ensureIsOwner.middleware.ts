import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contacts.entities";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepositoy = AppDataSource.getRepository(Contact);

  const contactId = req.params.id;
  const userId = res.locals.userId;

  const contact = await contactRepositoy.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    res.status(404).json({
      message: "Contact not found",
    });
  }

  if (contact?.user.id != userId) {
    res.status(403).json({
      message: "You dont't have permissions",
    });
  }

  return next();
};

export { ensureIsOwnerMiddleware };
