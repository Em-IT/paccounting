import UserProfile, { IUserProfile } from "../models/UserProfile";

export const addUser = async (userProfile: IUserProfile) => {
  const result = await UserProfile.create(userProfile);
  return result._id;
};

export const findUserByUsername = async (username: string) => {
  const result = await UserProfile.findOne({ username: username });
  return result;
};

export const readAllUsers = async () => {
  const result = await UserProfile.find();
  return result;
};

export const readMe = async (userId: string) => {
  const result = await UserProfile.findById(userId);
  return result;
};
