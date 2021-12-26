export interface TransactionDTO {
  id: number;
  title: string;
  amount: number;
  userId: number;
  date: Date;
  primaryCatId: number;
  secondaryCatId: number;
  tags: string[];
  isUnexpected: boolean;
}

export interface CreateTransactionDTO {
  title: string;
  amount: number;
  userId: number;
  date?: Date;
  primaryCatId?: number;
  secondaryCatId?: number;
  tags: string[];
  isUnexpected: boolean;
}