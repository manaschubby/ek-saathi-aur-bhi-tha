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
	const { account } = req.query;

	const user = await Admin.findById(account);
	if (user) {
		res.status(200).send({
			verified: "true",
		});
	}
}
