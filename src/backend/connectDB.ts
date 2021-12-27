import { MongoClient, Db } from 'mongodb';

const dbUrl: string =
  'mongodb://localhost:27017/paccounting' || process.env.MONGODB_URI;
let db: Db;

export const connectDatabase = async () => {
  if (db)
    return db;

  const client: MongoClient = new MongoClient(dbUrl);
           
  await client.connect();
       
  db = client.db();

  return db;
};
