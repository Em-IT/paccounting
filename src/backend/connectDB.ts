import { MongoClient, Db } from 'mongodb';

const dbUrl: string =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/paccounting';
let db: Db;

export const connectDatabase = async () => {
  if (db)
    return db;

  const client: MongoClient = new MongoClient(dbUrl);
           
  await client.connect();
       
  db = client.db();

  return db;
};
