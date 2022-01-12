import { defaultState } from "./defaultState";
import {
  logSuccess, logWarn, logInfo, logError,
} from './../helpers/logTools';
import UserProfile from "../models/UserProfile";
import Transaction from "../models/Transaction";
import DefaultCategory from "../models/DefaultCategory";

const logStartInit = (collectionName: string) => {
  logWarn('inserting initial data to ' +
    collectionName + ' collection');
};

const logFinishInit = (collectionName: string) => {
  logSuccess('Initial data of ' + collectionName +
    ' collection inserted successfuly');
};

const initializeDB = async () => {
  try {
    
    // any arbitary category in the database
    const anyUser = await UserProfile.findOne();
    const anyTransaction = await Transaction.findOne();
    const anyDefaultCategory = await DefaultCategory.findOne();
    
    if (!anyUser || !anyTransaction || !anyDefaultCategory)
      logInfo('Initializing Database...');
    else
      logInfo('Initial data is available in db');
    
    if (! anyUser) {
      logStartInit('UserProfile');
      UserProfile.insertMany(defaultState.users);
      logFinishInit('UserProfile');
    }

    if (! anyTransaction) {
      logStartInit('Transaction');
      Transaction.insertMany(defaultState.transactions);
      logFinishInit('Transaction');
    }

    if (! anyDefaultCategory) {
      logStartInit('DefaultCategory');
      DefaultCategory.insertMany(defaultState.defaultCategories);
      logFinishInit('DefaultCategory');
    }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    logError('Error in initializing db', error.toString());
  }
};

export default initializeDB;