import { ObjectId } from "mongodb";
import Transaction, { ITransaction } from "../models/Transaction";

export const readUserCosts = async (userId: ObjectId) => {
  return await Transaction.find({ userId: userId, isIncome: false });
};

export const addUserTransaction = async (transaction: ITransaction) => {
  const result = await Transaction.create(transaction);
  return result._id;
};