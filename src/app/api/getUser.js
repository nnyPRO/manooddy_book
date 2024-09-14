// /home/mesanilaihueang/My_Project/manoody_book/src/lib/API/getUser.js

"use server";

import User from "../../lib/models/Users";
import { connectToDb } from "../../lib/connectToDb";

export const getUser = async (id) => {
  //   console.log("testttt ID", id);
  try {
    connectToDb();
    // Ensure the id is a string and a valid ObjectId
    if (!id || typeof id !== "string") {
      throw new Error("Invalid ID format");
    }

    const user = await User.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    // console.log("User found:", typeof user);
    return user.toObject();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
