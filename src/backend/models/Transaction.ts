import mongoose, { Document, Model, model, Schema } from "mongoose";
import validator from 'validator';
// import { ObjectId } from 'mongodb';
import addModifyTimes from "./plugins/addModifyTimes";

/**
 * Interface to model the Profile Schema for TypeScript.
 * @param title:string
 * @param amount:number
 * @param isIncome:boolean
 * @param userId:objectId
 * @param date:Date
 * @param primaryCat:string
 * @param secondaryCat:string
 * @param tags:[string]
 * @param isUnexpected:boolean
 * @param description:string
 */
export interface ITransactionPure {
  title: string;
  amount: number;
  isIncome: boolean;
  userId: mongoose.ObjectId;
  date: Date;
  primaryCat: {
    _id: Schema.Types.ObjectId,
    title: string,
  };
  secondaryCat: {
    _id: Schema.Types.ObjectId,
    title: string,
  };
  tags: Array<string>;
  isUnexpected: boolean;
  description?: string;
}

export interface ITransaction extends ITransactionPure, Document {}

const transactionSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    validate: (value: number) => validator.isNumeric(value.toString()),
  },
  isIncome: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
  },
  date: {
    type: Date,
    required: true,
  },
  primaryCat: {
    type: {
      _id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  secondaryCat: {
    type: {
      _id: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
  tags: {
    type: [String],
  },
  isUnexpected: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
  },
});

transactionSchema.plugin(addModifyTimes);

// eslint-disable-next-line max-len
const Transaction: Model<ITransaction> = model("Transaction", transactionSchema);
export default Transaction;