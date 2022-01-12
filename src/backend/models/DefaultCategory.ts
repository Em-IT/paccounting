import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the default categories
 * @param title:string
 * @param isIncome:boolean
 * @param subCategories:Map
 */
export interface IDefaultCategoryPure {
  title: string;
  isIncome: boolean;
  subCategories: Array<{
    title: string;
  }>;
}

export interface IDefaultCategory extends IDefaultCategoryPure, Document {}

const defaultCategorySchema: Schema = new Schema({
  title: {
    type: String,
  },
  isIncome: {
    type: Boolean,
  },
  subCategories: [{
    title: {
      type: String,
    },
  }],
});

const DefaultCategory: Model<IDefaultCategory> =
  model("DefaultCategory", defaultCategorySchema);
export default DefaultCategory;