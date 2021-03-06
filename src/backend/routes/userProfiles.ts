/* eslint-disable newline-per-chained-call */
import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { body, header } from 'express-validator';

import { capsulateData } from '../helpers/apiTools';
import { logApi } from './../helpers/logTools';
import { addUser, findUserByUsername, readAllUsers, readMe }
  from '../services/userProfiles';
import { processedValidationResult } from './../helpers/validationTools';
import { IUserProfile } from './../models/UserProfile';

const router = express.Router();

router.post('/user',
  body('username', "Username is required")
    .not().isEmpty()
    .custom(value => {
      return findUserByUsername(value).then((user: IUserProfile | null) => {
        if (user)
          return Promise.reject('Username already in use');
        else
          return true;
      });
    }),
  body('firstName', "First Name is required").exists(),
  body('lastName', "Last Name is required").exists(),
  body('categories').exists(),
  body('password')
    .not().isIn(['123', '321', 'password', 'abc', 'qaz', 'qwe'])
    .withMessage('Do not use a common word as the password')

    .isLength({ min: 6 })
    .withMessage('must be at least 6 chars long')

    .matches(/\d/)
    .withMessage('must contain a number')

    .matches(/[a-z]/)
    .withMessage('must contain a lower case alphabetic')

    .matches(/[A-Z]/)
    .withMessage('must contain an upper case alphabetic')

    .matches(/[!@#$%^&*()+|?]/)
    .withMessage('must contain a symbol'),
  body('avatar').isURL(),
  async (req: Request, res: Response) => {
    logApi('Add User');

    const validationResult = processedValidationResult(req, res);
    if (validationResult)
      return validationResult;

    try {
      const user = req.body;
      const result = await addUser(user);
      return res
        .status(StatusCodes.OK)
        .json(capsulateData(result));
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(capsulateData(null, 0, error));
    }
  },
);

router.get('/users', async (_req: Request, res: Response) => {
  logApi('Read all Users');

  const result = await readAllUsers();
  return res
    .status(StatusCodes.OK)
    .json(capsulateData(result));
});

router.get('/me',
  header('userid', "UserId in header is required").exists(),
  async (req: Request, res: Response) => {
    logApi('Read my User Info');

    try {
      const userId: string = (Array.isArray(req.headers.userid) ?
        req.headers.userid[0] : req.headers.userid) || '';
      console.log('userID = ', userId);

      const result = await readMe(userId);
      return res
        .status(StatusCodes.OK)
        .json(capsulateData(result));

    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(capsulateData(null, 0, error));
    }
  });

export default router;
