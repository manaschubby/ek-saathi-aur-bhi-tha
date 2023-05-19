import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
	officer: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: false,
	},
	body: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	verified: {
		type: Boolean,
		default: false,
	},
});

const Story = mongoose.models.Story || mongoose.model("Story", storySchema);

export default Story;
