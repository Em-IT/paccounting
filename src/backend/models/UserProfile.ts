import { Document, Model, model, Schema } from "mongoose";
import validator from 'validator';
import addModifyTimes from "./plugins/addModifyTimes";

/**
 * Interface to model the User Schema
 * @param username:string
 * @param firstName:string
 * @param lastName:string
 * @param password:string
 * @param avatar:string
 * @param categories:[string]
 */
export interface IUserProfilePure {
  username: string;
  firstName: string;
  lastName: string;
  fullName?: string; // virtual field
  password: string;
  avatar?: string;
  categories: [string];
}

export interface IUserProfile extends IUserProfilePure, Document {}

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
  categories: {
    type: [String],
  },
},
{
  toJSON: { virtuals: true },
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

// Add instance method to read abbreviated full name
userProfileSchema.methods.getAbbreviatedFullName =
  function (this: IUserProfile) {
    return this.firstName + ' ' + this.lastName[0];
  };

const UserProfile: Model<IUserProfile> =
  model("UserProfile", userProfileSchema);

export default UserProfile;