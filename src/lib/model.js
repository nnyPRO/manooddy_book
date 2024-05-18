// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       dd: true,
//       unique: true,
//       min: 3,
//       max: 20,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       max: 35,
//     },
//     password: {
//       type: String,
//       required: true,
//       min: 6,
//     },
//     img: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// const postSchema = new mongoose.Schema(
//   {
//     sellerID: {
//       type: String,
//       required: true,
//     },
//     img: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     isOutOfStock: {
//       type: Boolean,
//       default: false,
//     },
//     isDelete: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// const tagSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     isDelete: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// const postTagSchema = new mongoose.Schema({
//   postID: String,
//   tagID: String,
// });

// const bookSchema = new mongoose.Schema(
//   {
//     postID: String,
//     name: String,
//     img: String,
//     quantity: Number,
//     realPrice: Number,
//     priceAfterDiscount: Number,
//     isDelete: {
//       type: Boolean,
//       default: false,
//     },
//     isOutOfStock: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// const orderItemSchema = new mongoose.Schema(
//   {
//     orderID: String,
//     bookID: String,
//     quantity: Number,
//     isDelete: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// const orderSchema = new mongoose.Schema(
//   {
//     buyerID: String,
//     quantity: Number,
//     isDelete: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// export const User = mongoose.model("User", userSchema);
// export const User = mongoose.models?.User
// export const Post = mongoose.model("Post", postSchema);
// export const Post = mongoose.model.Post
// // export const Tag = mongoose.model("Tag", tagSchema);
// export const Tag = mongoose.model.Tag
// export const PostTag = mongoose.model.PostTag
// // export const PostTag = mongoose.model("PostTag", postTagSchema);
// export const Book = mongoose.model.Book
// // export const Book = mongoose.model("Book", bookSchema);
// export const OrderItem = mongoose.model.OrderItem
// // export const OrderItem = mongoose.model("OrderItem", orderItemSchema);
// export const Order = mongoose.model.Order
// // export const Order = mongoose.model("Order", orderSchema);
