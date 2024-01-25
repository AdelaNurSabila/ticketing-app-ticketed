import { Request, Response } from 'express';
import prisma from '@/prisma';

export class AuthController {
  async getSampleData(req: Request, res: Response) {
    const sampleData = await prisma.sample.findMany();

    return res.status(200).send(sampleData);
  }

  async register(req: Request, res: Response) {
    try {
      const newUsers = await prisma.user.create({
        data: {
          name: req.body.name,
          code: req.body.code,
        },
      });

      return res.status(201).send({ success: true, data: newUsers });
    } catch (error) {}
  }
}
