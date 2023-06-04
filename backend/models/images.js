import mongoose from "mongoose";
import { Officer } from "./officer";
const ImageSchema = new mongoose.Schema({
	image: {
		type: String,
		required: true,
	},
	officers: {
		type: [String],
		required: true,
	},
	validated: {
		type: Boolean,
		default: false,
	},
});

const Images = mongoose.models.Images || mongoose.model("Images", ImageSchema);

export default Images;
