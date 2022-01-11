import { Document, Model, model, Schema } from "mongoose";

/**
 * Interface to model the default categories
 * @param title:string
 * @param isIncome:boolean
 * @param subCategories:Map
 */
export interface IDefaultCategory extends Document {
  title: string;
  isIncome: boolean;
  subCategories: [{
    title: string;
  }];
}

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