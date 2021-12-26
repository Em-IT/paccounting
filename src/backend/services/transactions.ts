import { connectDatabase } from "../connectDB"
import { CreateTransactionDTO } from "./TransactionType";

export const readUserTransactions = async (userId: number) => {
  const db = await connectDatabase();
  let transactionsCollection = db.collection('transactions');
  return transactionsCollection.find({userId: userId}).toArray();
}

export const addUserTransaction = async (transaction: CreateTransactionDTO) => {
  const db = await connectDatabase();
  let transactionsCollection = db.collection('transactions');
  const result = await transactionsCollection.insertOne(transaction);
  return result.insertedId;
}