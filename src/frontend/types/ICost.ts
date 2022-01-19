import { ObjectId } from "mongodb";

interface ICost {
  title: string;
  amount: number;
  isIncome: boolean;
  userId: ObjectId;
  date: Date;
  primaryCat: {
    id: ObjectId,
    title: string,
  };
  secondaryCat: {
    id: ObjectId,
    title: string,
  };
  tags: Array<string>;
  isUnexpected: boolean;
  description?: string;
}

export default ICost;