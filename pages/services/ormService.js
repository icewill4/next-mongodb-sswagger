import clientPromise from "../../lib/mongodb";

export const OrmService = {
  connectAndFind: async (dbName) => {
    try {
      const client = await clientPromise;
      const db = client.db("sample_mflix");
      const movies = await db.collection("movies").find({}).limit(10).toArray();
    } catch (error) {
      console.error(
        "Error occurred while connecting to database or retrieving data:",
        error
      );
      throw error; // Re-throw the error to propagate it upwards
    }
  },
};
