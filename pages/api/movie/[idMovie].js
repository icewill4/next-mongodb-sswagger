// pages/api/movie/[idMovie].js
import clientPromise from "../../../lib/mongodb";
export default async function handler(req, res) {
  const client = await clientPromise;
  const { idMovie } = req.query;
  const db = client.db("sample_mflix");
  const dbMovie = await db.collection("movies").findOne({ _id: idMovie });
  res.json({ status: 200, data: { movie: dbMovie } });
}
