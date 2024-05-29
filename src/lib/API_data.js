// import { connectToDb } from "./connectToDb"
// import Post from "./models/Post"
// import User from "./models/User"


// export const getUser = async () => {
//     try {
//         connectToDb()
//         const users = await User.find()
//         return users
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to fetch users!")
//     }
// }


// export const getPosts = async () => {
//     try {
//         connectToDb()
//         const posts = await Post.find()
//         return posts
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to fetch posts!")
//     }
// }

// export const getPost = async (each_post) => {
//     try {
//         connectToDb()
//         const post = await Post.find({slug: each_post})
//         return post
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to fetch post!")
//     }
// }


