"use server";
// "use client";
import Post from "../../lib/models/Posts";
import { connectToDb } from "../../lib/connectToDb";

export const getSlugPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post.toObject();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch slug!");
  }
};
