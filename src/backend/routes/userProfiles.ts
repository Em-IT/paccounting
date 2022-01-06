import express, { Request, Response } from 'express';

import { capsulateData } from '../helpers/apiTools';
import { logApi } from './../helpers/logTools';
import { addUser } from '../services/userProfiles';

const router = express.Router();

router.post('/user', async (req: Request, res: Response) => {
  logApi('Add User');

  try {
    const user = req.body;
    const result = await addUser(user);
    res.status(200).json(capsulateData(result));
  } catch (error) {
    res.status(500).json(capsulateData(null, error));
  }
});

export default router;
