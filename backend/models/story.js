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
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Story = mongoose.models.Story || mongoose.model("Story", storySchema);

export default Story;
