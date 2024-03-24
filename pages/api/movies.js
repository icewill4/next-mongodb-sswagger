import { OrmService } from "../services/ormService";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // Logic for POST case
      break;
    case "GET":
      try {
        const movies = await OrmService.connectAndFind(); // Await the completion of OrmService.connectAndFind()
        console.log("Retrieved movies:", movies); // Log the retrieved movies data
        res.json({ status: 200, data: movies }); // Send response with retrieved movies data
      } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
      break;
  }
}
