// Import required modules and models
import { Officer } from "../../backend/models/officer";
import connectDB from "../../backend/middleware/database";
import { NextApiRequest } from "next";

// Connect to database
connectDB();

// Define API endpoint handler
export default async function handler(req: NextApiRequest, res) {
	const { method } = req;

	switch (method) {
		case "GET":
			if (req.query.hasOwnProperty("id")) {
				// The "id" parameter exists in the URL
				const { id } = req.query;

				try {
					const officers = await Officer.findById(id);
					if (!officers) {
						return res.status(404).json({ msg: "Officer not found" });
					}
					res.status(200).json(officers);
				} catch (err) {
					console.error(err.message);
					res.status(500).send("Server Error");
				}
			} else {
				// The "id" parameter is missing from the URL
				try {
					const officers = await Officer.find().sort({ name: "asc" });
					res.status(200).json(officers);
				} catch (err) {
					console.error(err.message);
					res.status(500).send("Server Error");
				}
			}
			break;

		case "POST":
			if (req.headers.authorization == process.env.NEXT_PUBLIC_AUTH_KEY) {
				try {
					const newOfficer = new Officer(req.body);

					const officer = await newOfficer.save();
					res.status(201).json(officer);
				} catch (err) {
					console.error(err.message);
					res.status(500).send("Server Error");
				}
			} else {
				res.status(400).send("Unauthorized");
			}
			break;

		case "PUT":
			if (req.headers.authorization == process.env.NEXT_PUBLIC_AUTH_KEY) {
				try {
					const officer = await Officer.findByIdAndUpdate(
						req.query.id,
						req.body
					);
					if (!officer) {
						return res.status(404).json({ msg: "Officer not found" });
					}
					const updatedOfficer = await Officer.findById(req.query.id);
					res.status(200).json(updatedOfficer);
				} catch (err) {
					console.error(err.message);
					if (err.kind === "ObjectId") {
						return res.status(404).json({ msg: "Officer not found" });
					}
					res.status(500).send("Server Error");
				}
			} else {
				res.status(400).send("Unauthorized");
			}
			break;

		case "DELETE":
			if (req.headers.authorization == process.env.NEXT_PUBLIC_AUTH_KEY) {
				try {
					const officer = await Officer.findOneAndDelete(req.query.id);

					if (!officer) {
						return res.status(404).json({ msg: "Officer not found" });
					}

					res.status(200).json({ msg: "Officer removed", officer: officer });
				} catch (err) {
					console.error(err.message);
					if (err.kind === "ObjectId") {
						return res.status(404).json({ msg: "Officer not found" });
					}
					res.status(500).send("Server Error");
				}
			} else {
				res.status(400).send("Unauthorized");
			}
			break;
	}
}
