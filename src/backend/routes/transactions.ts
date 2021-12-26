import express, { Request, Response } from 'express';

import { readUserTransactions } from '../services/transactions';
import { capsulateData } from '../helpers/apiTools';
import { logApi } from './../helpers/logTools';

const router = express.Router();

router.get('/user/:userId/transactions', async (req: Request, res: Response) => {
  //TODO: read userId from auth token
  logApi('Read User Transactions API fired');

  try {
    const userId = parseInt(req.params.userId);
    if(!userId)
      throw("Invalid User ID");

    const transactions = await readUserTransactions(userId);
    res.status(200).json(capsulateData(transactions));
  } catch (error) {
    res.status(500).send(error);
  }

});

export default router;
