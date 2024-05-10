// src/api/routes/userRoutes.ts
import { Router } from 'express';
import { returnKanjiHome } from '../../controllers/kanji/kanjiControllers';  // Đảm bảo sử dụng đúng file controller

const router = Router();

router.get('/', returnKanjiHome);

export default router;
