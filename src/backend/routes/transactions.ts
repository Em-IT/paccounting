import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ObjectId } from 'mongodb';

import {
  addUserTransaction,
  readUserCosts,
} from '../services/transactions';
import { capsulateData } from '../helpers/apiTools';
import { logApi } from './../helpers/logTools';

const router = express.Router();

router.get('/my-costs',
  async (req: Request, res: Response) => {
    logApi('Read User Transactions');

    try {
      // TODO: read userId from auth token
      const userId = new ObjectId(
        req.headers["userid"]?.toString() ||
        '61e08a74927d9e1bc3cfbe79',
      );

      const transactions = await readUserCosts(userId);
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
