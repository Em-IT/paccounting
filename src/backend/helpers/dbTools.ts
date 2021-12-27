/* eslint-disable @typescript-eslint/no-explicit-any */
export const collectionExists = async (db: any, collectionName: string) => {
  const allCollections = await db.listCollections().toArray();
  // console.log('collectionNames=', allCollections);
  const count =
    allCollections.filter((c: any) => c.name === collectionName)
      .length;
  return count > 0;
};