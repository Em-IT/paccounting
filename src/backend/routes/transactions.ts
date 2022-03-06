import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { body } from 'express-validator';
import { ObjectId } from 'mongodb';

import {
  addUserTransaction,
  readTotalUserCosts,
  readUserCosts,
} from '../services/transactions';
import { capsulateData } from '../helpers/apiTools';
import { logApi } from './../helpers/logTools';

const router = express.Router();

router.get('/my-costs/:page?',
  async (req: Request, res: Response) => {
    const page: number = req.params.page ? parseInt(req.params.page) : 1;
    const limit = 10;
    logApi('Read My Cost Transactions, Page=', page);

    try {
      // TODO: read userId from auth token
      const userId = new ObjectId(
        req.headers["userid"]?.toString() ||
        '61e08a74927d9e1bc3cfbe79',
      );

      const transactions = await readUserCosts(userId, page, limit);
      const total = await readTotalUserCosts(userId);
      res
        .status(StatusCodes.OK)
        .json(capsulateData(transactions, total));
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(capsulateData(null, 0, error));
    }
  },
);

router.post('/cost', [

  body('date').default(new Date()),
  body('isIncome').default(false),

], async (req: Request, res: Response) => {
  logApi('Add User Transaction');

  try {
    const transaction = req.body;
    /* const userId: string = (Array.isArray(req.headers.userId) ?
      req.headers.userId[0] : req.headers.userId) || '';*/
    /*
     * const userId = parseInt(req.params.userId);
     * if(!userId)
     *  throw("Invalid User ID");
     */

    // const result = await addUserTransaction(transaction, userId);
    const result = await addUserTransaction(transaction);
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
