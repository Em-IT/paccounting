import { connectDatabase } from "../connectDB"

export const readUserTransactions = async (userId: number) => {
  const db = await connectDatabase();
  let transactionsCollection = db.collection('transactions');
  return transactionsCollection.find({userId: userId}).toArray();
}
