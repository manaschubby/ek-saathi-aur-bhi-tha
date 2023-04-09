import Story from '../../backend/models/story';
import connectDB from "../../backend/middleware/database";

connectDB();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
        if (req.query['officer_id']) {
            // The "id" parameter exists in the URL
            const { officer_id } = req.query;
            try 
            {
                const stories = await Story.find(
                    {
                        "officer": officer_id
                    }
                )
                res.status(200).json(stories);
            } 
            catch (err) 
            {
                res.status(500).json({ error: "Server error" });
            }
        }else{
            try 
            {
                const stories = await Story.find().sort({ createdAt: "desc" });
                res.status(200).json(stories);
            } 
            catch (err) 
            {
                res.status(500).json({ error: "Server error" });
            }
        }
      break;
    case "POST":
        try {
            const story = new Story(req.body);
            await story.save();
            res.status(201).json(story);
        } catch (err) {
            res.status(500).json({ error: "Server error", msg: err });
        }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
