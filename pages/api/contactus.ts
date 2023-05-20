import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const authentication = async () => {
		const auth = new google.auth.GoogleAuth({
			keyFile: "credentials.json",
		});
	};
}
