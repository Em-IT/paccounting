import { connect } from "mongoose";
import dotenv from 'dotenv';
import { logError, logSuccess } from "./helpers/logTools";

dotenv.config();

export const connectDatabase = async () => {
  try {
    const DEFAULT_DB_URL = 'mongodb://mongo:27017/paccounting';
    const dbUrl: string = process.env.MONGODB_URI || DEFAULT_DB_URL;
    // console.log('dbUrl =', dbUrl);

    await connect(dbUrl);
    logSuccess('Connected to MongoDB');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {

    logError(error?.message);
    process.exit(1);

  }
};
