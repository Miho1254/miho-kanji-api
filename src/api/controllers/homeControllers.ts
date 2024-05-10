// src/api/controllers/userController.ts
import { Request, Response } from 'express';

export const response = (req: Request, res: Response): void => {
  res.send('Hello world');
};