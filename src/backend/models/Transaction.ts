import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the Profile Schema for TypeScript.
 * @param title:string
 * @param amount:number
 * @param userId:objectId
 * @param date:Date
 * @param primaryCat:string
 * @param secondaryCat:string
 * @param tags:[string]
 * @param isUnexpected:boolean
 */
export interface ITransaction extends Document {
  title: string;
  amount: number;
  userId: Schema.Types.ObjectId;
  date: Date;
  // primaryCatId: Schema.Types.ObjectId;

  // secondaryCatId: Schema.Types.ObjectId;
  primaryCat: string;
  secondaryCat: string;
  tags: [string];
  isUnexpected: boolean;
}

const transactionSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
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
});

// eslint-disable-next-line max-len
const Transaction: Model<ITransaction> = model("Transaction", transactionSchema);
export default Transaction;