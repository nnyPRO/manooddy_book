import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    sellerID: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isOutOfStock: {
      type: Boolean,
      default: false,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Post = mongoose.models?.Post || mongoose.model('Post', postSchema)
export default Post
