import { Document, Model, model, Schema } from "mongoose";
import validator from 'validator';
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
  username: string;
  firstName: string;
  lastName: string;
  fullName?: string; // virtual field
  categories: [string];
  password: string;
  avatar?: string;
}

const userProfileSchema: Schema = new Schema({
  username: {
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
    validate: (value: string) => {
      const isValid = validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 1, minUppercase: 1,
        minNumbers: 1, minSymbols: 1,
      });
      return isValid;
    },
  },
  avatar: {
    type: String,
    validate: (value: string) => validator.isURL(value),
  },
});

// Add createdAt & updatedAt fields
userProfileSchema.plugin(addModifyTimes);

// Add virtual fullName field (getter function)
userProfileSchema.virtual('fullName').get(function (this: IUserProfile) {
  return this.firstName + ' ' + this.lastName;
});

// Add virtual fullName field (setter function)
userProfileSchema.virtual('fullName').set(
  function (this: IUserProfile, fullName: string) {
    const nameParts = fullName.split(' ');
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  },
);

const UserProfile: Model<IUserProfile> =
  model("UserProfile", userProfileSchema);

export default UserProfile;