"use server";
import Book from "../../lib/models/Books";
import { connectToDb } from "../../lib/connectToDb";

export const getBooks = async (postID) => {
  try {
    connectToDb();
    // console.log("Bookkkkkkk:",postId);
    const books = await Book.find({ postID });
    // console.log("Fetched book:", books);
    return books;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch books!");
  }
};

// export const getAllBooks = async () => {
//   try {
//     connectToDb()
//     const books = await Book.find()
//     return books
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch all books!")
//   }
// };
