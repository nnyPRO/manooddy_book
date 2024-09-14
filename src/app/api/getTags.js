"use server";

import { connectToDb } from "../../lib/connectToDb";
import PostTag from "../../lib/models/PostTags";
import Tag from "../../lib/models/Tags";

export const getTags = async (postID) => {
  // console.log("postIDDDDDD", typeof postID);
  try {
    await connectToDb();
    // console.log("Connected to database");

    const postTags = await PostTag.find({ IdOfPost: postID });

    if (postTags.length === 0) {
      console.log("No postTags found for postID:", postID);
      return [];
    }

    const tagPromises = postTags.map(async (postTag) => {
      // console.log("Processing postTag:", postTag);
      const tags = await Tag.findOne({ _id: postTag.tagID });
      if (tags && !tags.isDelete) {
        return tags;
      }
      return null;
    });

    // console.log("tagPromises:", tagPromises);
    const tagsArray = await Promise.all(tagPromises);
    // console.log("tagsArray:", tagsArray);
    const arrTags = tagsArray.filter((tag) => tag != null);
    // console.log("arrTags", arrTags);
    return arrTags;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch tags!");
  }
};
