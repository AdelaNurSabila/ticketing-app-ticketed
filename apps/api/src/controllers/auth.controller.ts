
import { Request, Response, NextFunction } from 'express';
import prisma from '../prisma';

export class AuthController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, firstName, lastName, password, email } = req.body;

      const newUser = await prisma.user.create({
        data: {
          username,
          firstName,
          lastName,
          password,
          email,
        },
      });
      res.status(201).send(newUser);
    } catch (error: any) {
      console.log(error);
      return res.status(500).send(error);
    }

  }
}
