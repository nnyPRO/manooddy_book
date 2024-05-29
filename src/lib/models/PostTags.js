import mongoose from "mongoose";

const postTagSchema = new mongoose.Schema({
  IdOfPost: {
    type: String,
    required: true,
  },
  tagID: {
    type: String,
    required: true,
  },
}, {collection: 'postTags'});

const PostTag = mongoose.models?.PostTag || mongoose.model("PostTag", postTagSchema)
export default PostTag
