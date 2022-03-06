import { ObjectId } from "mongodb";

import Transaction, { ITransaction } from "../models/Transaction";

export const readUserCosts = async (userId: ObjectId, page: number, limit: number) => {
  return await Transaction
    .find({ userId: userId, isIncome: false })
    .sort({ date: -1 })
    .skip((page - 1) * limit)
    .limit(limit);
};

export const readTotalUserCosts = async (userId: ObjectId) => {
  return await Transaction.count({ userId: userId, isIncome: false });
};

export const addUserTransaction = async (transaction: ITransaction) => {
  const result = await Transaction.create(transaction);
  return result._id;
};