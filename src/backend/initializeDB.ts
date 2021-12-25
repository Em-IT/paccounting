import { defaultState } from "./defaultState";
import { connectDatabase } from "./connectDB";

const initializeDB = async () => {
  try {
    let db = await connectDatabase();

    // any arbitary category in the database
    const anyCategory = await db.collection('primaryCats').findOne();
    
    // No category is available in the database
    if(! anyCategory) {

      const collectionNames = Object.keys(defaultState);
      const collectionValues = Object.values(defaultState);

      for(let i=0; i<collectionNames.length; ++i) {
        console.log('inserting collection ' + collectionNames[i]);
        let collection = db.collection(collectionNames[i]);
        await collection.insertMany(collectionValues[i]);
        console.log('collection ' + collectionNames[i] + ' inserted successfuly');
      }

    }
    else {
      console.log('data had been available in db from past, no need to initialize');
    }
  } catch(error) {
    console.log('Error in initializing db');
  }
}

initializeDB();
