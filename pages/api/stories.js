import Story from "../../backend/models/story";
import connectDB from "../../backend/middleware/database";
import { Officer } from "../../backend/models/officer";
connectDB();

export default async function handler(req, res) {
	const { method } = req;

	switch (method) {
		case "GET":
			if (req.query["officer_id"]) {
				// The "id" parameter exists in the URL
				const { officer_id } = req.query;
				try {
					const stories = await Story.find({
						officer: officer_id,
					});
					res.status(200).json(stories);
				} catch (err) {
					res.status(500).json({ error: "Server error" });
				}
			} else {
				try {
					const stories = await Story.find().sort({ createdAt: "desc" });
					const sendingStories = [];
					for (const story of stories) {
						const offr = await Officer.findById(story.officer);
						if (offr.image) {
							offr.image =
								offr.image + "-/preview/938x432/-/quality/smart/-/format/auto/";
						}
						const sendingStory = {
							createdAt: story.createdAt,
							body: story.body,
							author: story.author,
							verified: story.verified,
							email: story.email,
							_id: story._id,
							image: offr.image,
							officer: offr.rank + " " + offr.name,
						};
						sendingStories.push(sendingStory);
					}
					res.status(200).json(sendingStories);
				} catch (err) {
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
		case "PUT":
			if (req.headers.authorization == process.env.NEXT_PUBLIC_AUTH_KEY) {
				if (req.query["id"]) {
					// The "id" parameter exists in the URL
					const { id } = req.query;
					try {
						const stories = await Story.findByIdAndUpdate(id, req.body);
						res.status(200).json(stories);
					} catch (err) {
						res.status(500).json({ error: "Server error" });
					}
				}
			} else {
				res.status(400).send("Unauthorized");
			}
			break;
		case "DELETE":
			if (req.headers.authorization == process.env.NEXT_PUBLIC_AUTH_KEY) {
				if (req.query["id"]) {
					// The "id" parameter exists in the URL
					const { id } = req.query;
					try {
						const stories = await Story.findByIdAndDelete(id);
						res.status(200).json(stories);
					} catch (err) {
						res.status(500).json({ error: "Server error" });
					}
				}
			} else {
				res.status(400).send("Unauthorized");
			}
			break;
		default:
			res.setHeader("Allow", ["GET", "POST", "DELETE", "PUT"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
