import DefaultCategory, { IDefaultCategory } from "../models/DefaultCategory";

export const readAllDefaultCategories = async () => {
  return await DefaultCategory.find();
};

export const addDefaultCategory = async (defaultCategory: IDefaultCategory) => {
  const result = await DefaultCategory.create(defaultCategory);
  return result._id;
};