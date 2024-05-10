// src/app.ts
import express, { Express, Request, Response } from 'express';
import homeRoutes from './api/routes/homeRoutes';
import kanjiRoutes from './api/routes/kanji/kanjiRoutes'
const app: Express = express();
const PORT: number | string = process.env.PORT || 3000;

app.use(express.json());

app.use('/', homeRoutes);
app.use('/kanji', kanjiRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
