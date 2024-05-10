// src/api/controllers/userController.ts
import { Request, Response } from "express";

export const returnKanjiHome = (req: Request, res: Response): void => {
  const { level, stroke } = req.query; // Lấy các tham số "level" và "stroke" từ query string

  // Thực hiện các xử lý tiếp theo với level và stroke
  res.send(`Kanji with level: ${level} and stroke count: ${stroke}`);
};
