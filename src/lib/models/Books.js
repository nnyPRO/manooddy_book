import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    postID: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    realPrice: {
      type: Number,
      required: true,
    },
    priceAfterDiscount: {
      type: Number,
      required: true,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
    isOutOfStock: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Book = mongoose.models?.Book || mongoose.model("Book", bookSchema);
export default Book;
