import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});

const Tag = mongoose.models?.Tag || mongoose.model("Tag", tagSchema);
export default Tag;
