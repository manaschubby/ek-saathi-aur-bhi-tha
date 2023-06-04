import mongoose from "mongoose";
import Images from "../../backend/models/images";
import connectDB from "../../backend/middleware/database";
import { Officer } from "../../backend/models/officer";

connectDB();

export default async function handler(req, res) {
	const { method } = req;

	switch (method) {
		case "GET":
			if (req.query["officer_id"]) {
				const { officer_id } = req.query;
				try {
					const images = await Images.find({
						officers: officer_id,
						validated: true,
					});
					const sendingImages = [];
					const officers = await Officer.find();
					images.forEach((image) => {
						const newImage = {
							image: image.image,
							validated: image.validated,
							officers: [],
						};

						newImage.officers = image.officers.map((officer) => {
							return officers.find(
								(findofficer) => findofficer._id.toString() == officer
							);
						});
						console.log(newImage);
						sendingImages.push(newImage);
					});
					res.status(200).json(sendingImages);
				} catch (err) {
					console.log(err);
					res.status(500).json({ error: "Server error" });
				}
			} else {
				try {
					const images = await Images.find();
					res.status(200).json(images);
				} catch (err) {
					res.status(500).json({ error: "Server error" });
				}
			}
			break;
		case "POST":
			try {
				const image = new Images(req.body);
				await image.save();
				res.status(201).json(image);
			} catch (err) {
				res.status(500).json({ error: "Server error", msg: err });
			}
			break;
		case "PUT":
			if (req.headers.authorization === process.env.NEXT_PUBLIC_AUTH_KEY) {
				if (req.query["id"]) {
					const { id } = req.query;
					try {
						const image = await Images.findByIdAndUpdate(id, req.body);
						res.status(200).json(image);
					} catch (err) {
						console.log(err);
						res.status(500).json({ error: "Server error" });
					}
				}
			} else {
				res.status(400).send("Unauthorized");
			}
			break;
		case "DELETE":
			if (req.headers.authorization === process.env.NEXT_PUBLIC_AUTH_KEY) {
				if (req.query["id"]) {
					const { id } = req.query;
					try {
						const image = await Images.findByIdAndDelete(id);
						res.status(200).json(image);
					} catch (err) {
						console.log(err);
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
