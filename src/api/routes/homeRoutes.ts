// src/api/routes/userRoutes.ts
import { Router } from 'express';
import { response } from '../../api/controllers/homeControllers';  // Đảm bảo sử dụng đúng file controller

const router = Router();

router.get('/', response);

export default router;
