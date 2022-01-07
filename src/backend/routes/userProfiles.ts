import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { capsulateData } from '../helpers/apiTools';
import { logApi } from './../helpers/logTools';
import { addUser } from '../services/userProfiles';

const router = express.Router();

router.post('/user', async (req: Request, res: Response) => {
  logApi('Add User');

  try {
    const user = req.body;
    const result = await addUser(user);
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
