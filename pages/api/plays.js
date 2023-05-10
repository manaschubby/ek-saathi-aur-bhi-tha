import connectDB from "../../backend/middleware/database";
import { NextApiRequest } from "next";
import Plays from "../../backend/models/play";

// Connect to database
connectDB();

export default async function handler(req, res) {
	const { method } = req;

	switch (method) {
		case "GET": {
			const model = await Plays.find();
			return res.status(200).json({
				number: model[0].number,
			});
		}
		case "PUT": {
			try {
				const model = await Plays.find();
				const play = model[0];

				const updatedNumber = await Plays.findByIdAndUpdate(play._id, {
					number: play.number + 1,
				});

				if (!updatedNumber) {
					throw {
						message:
							"Error Adding your play to the Database. Please try again in a while",
					};
				}

				return res.status(201).json({ number: play.number + 1 });
			} catch (err) {
				console.error(err.message);
				return res.status(500).send(err.message);
			}
		}
		case "POST": {
			try {
				const new_play = new Plays({ number: 0 });

				const play = await new_play.save();
				return res.status(201).json(play);
			} catch (err) {
				console.error(err.message);
				return res.status(500).send("Server Error");
			}
		}
	}
}
