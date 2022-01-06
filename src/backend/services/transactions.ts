import Transaction, { ITransaction } from "../models/Transaction";

export const readUserTransactions = async (userId: number) => {
  return await Transaction.find({ userId: userId });
};

export const addUserTransaction = async (transaction: ITransaction) => {
  const result = await Transaction.create(transaction);
  return result._id;
};