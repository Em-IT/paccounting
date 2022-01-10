import { Document, Model, model, Schema } from "mongoose";
import validator from 'validator';
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
export interface ITransaction extends Document {
  title: string;
  amount: number;
  isIncome: boolean;
  userId: Schema.Types.ObjectId;
  date: Date;
  // primaryCatId: Schema.Types.ObjectId;

  // secondaryCatId: Schema.Types.ObjectId;
  primaryCat: string;
  secondaryCat: string;
  tags: [string];
  isUnexpected: boolean;
  description?: string;
}

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
  /*
   * primaryCatId: {
   *   type: Schema.Types.ObjectId,
   *   required: true,
   * },
   * secondaryCatId: {
   *   type: Schema.Types.ObjectId,
   *   required: true,
   * },
   */
  primaryCat: {
    type: String,
    required: true,
  },
  secondaryCat: {
    type: String,
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