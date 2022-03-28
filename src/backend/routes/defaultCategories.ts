import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import {
  readAllDefaultCategories,
  addDefaultCategory,
} from '../services/defaultCategories';
import { capsulateData } from '../helpers/apiTools';
import { logApi } from './../helpers/logTools';

const router = express.Router();

router.get('/defaultCategories',
  async (_req: Request, res: Response) => {
    logApi('Read Default Categories');

    try {
      const defaultCategories = await readAllDefaultCategories();
      res
        .status(StatusCodes.OK)
        .json(capsulateData(defaultCategories));
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(capsulateData(null, 0, error));
    }
  },
);

router.post('/defaultCategory', async (req: Request, res: Response) => {
  logApi('Add a Default Category');

  try {
    const defaultCategory = req.body;

    const result = await addDefaultCategory(defaultCategory);
    res
      .status(StatusCodes.OK)
      .json(capsulateData(result));
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(capsulateData(null, 0, error));
  }
});

export default router;
