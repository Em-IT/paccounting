import express, { Request, Response } from 'express';
//import {  } from './services/';
const router = express.Router();

router.get('/helloworld', async (_req: Request, res: Response) => {
  console.log('Hello World API fired');

  try {
    res.status(200).json({message: "Hello World"});
  } catch (error) {
    res.status(500).send(error);
  }

});

export default router;
