// import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';
import { ObjectID } from 'bson';
import { IUserProfilePure } from './../models/UserProfile';
// import { ITransactionPure } from '../models/Transaction';
import { IDefaultCategoryPure } from './../models/DefaultCategory';

interface IDefaultState {

  users: Array<IUserProfilePure>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transactions: Array<any>,
  defaultCategories: Array<IDefaultCategoryPure>

}

export const defaultState: IDefaultState = {
  users: [
    {
      username: 'admin',
      firstName: 'Emad',
      lastName: 'Armoun',
      password: 'Zar@123',
      categories: [{
        title: 'Food',
        isIncome: false,
        subCategories: [{
          title: 'Groceries',
        }, {
          title: "Fruit",
        }, {
          title: "Meat",
        }],
      }],
    },
  ],
  transactions: [
    {
      title: 'Buy a toy',
      amount: 180000,
      isIncome: false,
      // userId: new mongoose.Types.ObjectId(),
      date: new Date(2021, 12, 23, 18, 14),
      primaryCat: {
        id: new ObjectId(), // mongoDB ObjectId
        title: 'a',
      },
      secondaryCat: {
        id: new ObjectId(), // mongoDB ObjectId
        title: 'b',
      },
      tags: ['Birthday'],
      isUnexpected: true,
      description: '',
    },
    {
      title: 'Grocery',
      amount: 75000,
      isIncome: false,
      // userId: new ObjectId(),
      date: new Date(2021, 12, 23, 11, 42),
      primaryCat: {
        id: new ObjectID(), // bson ObjectId
        title: 'a',
      },
      secondaryCat: {
        id: new ObjectID(), // bson ObjectId
        title: 'b',
      },
      tags: [],
      isUnexpected: false,
      description: '',
    },
  ],
  defaultCategories: [
    {
      title: "Food",
      isIncome: false,
      subCategories: [
        {
          title: "Groceries",
        }, {
          title: "Fruit",
        }, {
          title: "Meat",
        },
      ],
    }, {
      title: "Free of Charge",
      isIncome: false,
      subCategories: [
        {
          title: "Gift",
        }, {
          title: "Chairity",
        },
      ],
    }, {
      title: "Other",
      isIncome: false,
      subCategories: [
        {
          title: "Other",
        }, {
          title: "Home tools",
        }, {
          title: "Mobile Charge",
        }, {
          title: "Internet services",
        },
      ],
    },
  ],
};
