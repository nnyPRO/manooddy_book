import Post from "../../lib/models/Posts";
import { connectToDb } from "../../lib/connectToDb";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find().exec();
    if (!posts) {
      throw new Error("Post not found");
    }
    const result = posts.map((post) => {
      const createdAt = post._id.getTimestamp();
      // console.log({ ...post._doc, createdAt });
      return { ...post._doc, createdAt };
    });
    // console.log("result", result);
    return result;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

// export const getPostCreateAt = async (postId) => {
//     try {
//       await connectToDb();
//       const post = await Post.findById(postId).exec();
//       if (!post) {
//         throw new Error('Post not found');
//       }
//       const createdAt = post._id.getTimestamp()
//       let result = {...post._doc, createdAt}
//       console.log("result", result);
//       return result

//     } catch (err) {
//       console.log(err);
//       throw new Error("Failed to fetch post with createAt!");
//     }
//   };
