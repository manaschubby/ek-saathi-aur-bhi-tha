import { Admin } from "../../../backend/models/admin";
import connectDB from "../../../backend/middleware/database";
import { NextApiRequest, NextApiResponse } from "next";

// Connect to database
connectDB();

// Define API endpoint handler
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { email, password } = req.query;
	if (req.query.hasOwnProperty("email")) {
		const newLogin = await Admin.findOne({
			email: email,
		});
		if (newLogin) {
			if (newLogin.password == password) {
				res.status(200).send({
					verified: true,
					token: newLogin._id,
				});
			} else {
				res.status(400).send({
					verified: false,
				});
			}
		} else {
			res.status(404).send({
				verified: false,
				err: "User Not found",
			});
		}
	} else {
		console.log(req.query);
		res.status(400).send({
			verified: false,
			err: "Bad Request",
		});
	}
}
