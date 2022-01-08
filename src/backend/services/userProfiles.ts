import UserProfile, { IUserProfile } from "../models/UserProfile";

export const addUser = async (userProfile: IUserProfile) => {
  const result = await UserProfile.create(userProfile);
  return result._id;
};

export const findUserByUsername = async (username: string) => {
  const result = await UserProfile.findOne({ username: username });
  return result;
};