import { Document, Model, model, Schema } from "mongoose";
import addModifyTimes from "./plugins/addModifyTimes";

/**
 * Interface to model the User Schema
 * @param username:string
 * @param firstName:string
 * @param lastName:string
 * @param categories:[string]
 * @param password:string
 * @param avatar:string
 */
export interface IUserProfile extends Document {
  // _id: string;
  userName: string;
  firstName: string;
  lastName: string;
  categories: [string];
  password: string;
  avatar: string;
}

const userProfileSchema: Schema = new Schema({
  /*
   * _id: {
   *   type: String,
   *   required: true,
   *   unique: true,
   * },
   */
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  categories: {
    type: [String],
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

userProfileSchema.plugin(addModifyTimes);

const UserProfile: Model<IUserProfile> =
  model("UserProfile", userProfileSchema);

export default UserProfile;