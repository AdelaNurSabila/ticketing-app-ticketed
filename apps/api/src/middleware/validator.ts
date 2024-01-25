import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const regisValidation = [
  body('username').notEmpty().withMessage('Username required'),
  body('email').notEmpty().withMessage('Email required'),
  body('email').isEmail().withMessage('Email wrong'),
  (req: Request, res: Response, next: NextFunction) => {
    const errorValidator = validationResult(req);
    if (!errorValidator.isEmpty()) {
      return res.status(400).send({ error: errorValidator.array() });
    }
    next();
  },
];
