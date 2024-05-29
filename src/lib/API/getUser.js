import User from "../models/Users";
import { connectToDb } from "../connectToDb"

export const getUser = async (id) => {
    try {
        connectToDb();
        // Ensure the id is a string and a valid ObjectId
        if (!id || typeof id !== 'string') {
            throw new Error("Invalid ID format");
        }

        const user = await User.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};
