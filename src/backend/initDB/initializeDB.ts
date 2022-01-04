/* eslint-disable max-len */
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

      db.createCollection('defaultCategories', { validator: { $jsonSchema: { bsonType: 'object', required: ['title',          'isIncome',          'subCategories'], properties: { title: { bsonType: 'string' }, isIncome: { bsonType: 'bool' }, subCategories: { bsonType: 'array', items: {
        required: ['title'], properties: { title: { bsonType: 'string' } } } } }         }      } });
      
      db.createCollection('users', { validator: { $jsonSchema: { bsonType: 'object', required: ['firstName',          'lastName',          'userName',          'password',          'avatar',          'categories'], properties: { firstName: { bsonType: 'string' }, lastName: { bsonType: 'string' }, userName: { bsonType: 'string' }, password: { bsonType: 'string' }, avatar: { bsonType: 'string' }, categories: { bsonType: 'array', items: {
        required: ['title',          'isIncome',          'subCategories'], properties: { title: { bsonType: 'string' }, isIncome: { bsonType: 'bool' }, subCategories: { bsonType: 'array', items: {
          required: ['title'], properties: { title: { bsonType: 'string' } } } } } } } }         }      } });
          
      db.createCollection(
        'transactions', { validator: { $jsonSchema: { bsonType: 'object', required: ['title',          'amount',          'isIncome',          'userId',          'date',          'catId',          'subCatId',          'tags',          'isUnexpected'], properties: { title: { bsonType: 'string' }, amount: { bsonType: 'int' }, isIncome: { bsonType: 'bool' }, userId: { bsonType: 'objectId' }, date: { bsonType: 'date' }, catId: { bsonType: 'objectId' }, subCatId: { bsonType: 'objectId' }, tags: { bsonType: 'array', items: { bsonType: 'string' } }, isUnexpected: { bsonType: 'bool' }, description: { bsonType: 'string' } }         }      } });

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
