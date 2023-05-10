import mongoose from "mongoose";

const PlaySchema = new mongoose.Schema({
	number: {
		type: Number,
		required: true,
	},
});

const Plays = mongoose.models.Plays || mongoose.model("Plays", PlaySchema);

export default Plays;
