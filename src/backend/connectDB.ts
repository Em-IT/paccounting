import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const dbUrl: string =
  process.env.MONGODB_URI || 'mongodb://mongo:27017/paccounting';
let db: Db;

export const connectDatabase = async () => {
  if (db)
    return db;

  // console.log('dbUrl =', dbUrl);
  const client: MongoClient = new MongoClient(dbUrl);
           
  await client.connect();
       
  db = client.db();

  return db;
};
