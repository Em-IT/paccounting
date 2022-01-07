import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import {
  addUserTransaction,
  readUserTransactions,
} from '../services/transactions';
import { capsulateData } from '../helpers/apiTools';
import { logApi } from './../helpers/logTools';

const router = express.Router();

router.get('/user/:userId/transactions',
  async (req: Request, res: Response) => {
  // TODO: read userId from auth token
    logApi('Read User Transactions');

    try {
      const userId = parseInt(req.params.userId);
      if (!userId)
        throw ("Invalid User ID");

      const transactions = await readUserTransactions(userId);
      res
        .status(StatusCodes.OK)
        .json(capsulateData(transactions));
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(capsulateData(null, error));
    }
  },
);

router.post('/transaction', async (req: Request, res: Response) => {
  logApi('Add User Transaction');

  try {
    const transaction = req.body;
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
      .json(capsulateData(null, error));
  }
});

export default router;
