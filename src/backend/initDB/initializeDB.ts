/* eslint-disable @typescript-eslint/no-explicit-any */
import { defaultState } from "./defaultState";
import { connectDatabase } from "../connectDB";
import { logSuccess, logWarn, logInfo, logError } from './../helpers/logTools';

const initializeDB = async () => {
  try {
    const db = await connectDatabase();

    // any arbitary category in the database
    const anyCategory = await db.collection('primaryCats').findOne();
    
    // No category is available in the database
    if (! anyCategory) {
      logInfo('Initializing Database...');

      const collectionNames = Object.keys(defaultState);
      const collectionValues = Object.values(defaultState);

      for (let i = 0; i < collectionNames.length; ++i) {
        logWarn('inserting collection ' + collectionNames[i]);
        const collection = db.collection(collectionNames[i]);
        await collection.insertMany(collectionValues[i]);
        logSuccess('collection ' + collectionNames[i]
          + ' inserted successfuly');
      }

    } else {
      logInfo('Initial data is available in db');
    }
  } catch (error: any) {
    logError('Error in initializing db', error.toString());
  }
};

initializeDB();
