import Post from "../models/Posts";
import { connectToDb } from "../connectToDb"
import PostTag from "../models/PostTags";
import Tag from "../models/Tags";


export const getPosts = async () => {
    try {
        connectToDb()
        const posts = await Post.find()
        // const postTags = await Tag.find()
        // console.log("testttttttttttt:", postTags);
        return posts
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!")
    }
}


export const getPostCreateAt = async (postId) => {
    try {
        connectToDb()
        const postCreateAt = await Post.findById(postId).exec();
        return postCreateAt
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post with createAt!")
    }
}