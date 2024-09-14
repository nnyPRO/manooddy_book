// /home/mesanilaihueang/My_Project/manoody_book/src/lib/action.js
"use server";

import { connectToDb } from "@/lib/connectToDb";
import User from "@/lib/models/Users";
import { signIn, signOut } from "@/lib/auth";
import bcrypt from "bcrypt";

export const handleGoogleLogin = async () => {
  // "use server";
  await signIn("Google");
};

export const handleLogout = async () => {
  // "use server";
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, image, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ username });

    if (user) {
      return "User already exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // const newUser = new User({ username, email, password, image });
    const newUser = new User({ username, email, password: hashedPassword, image });

    await newUser.save();
  } catch (error) {
    console.log("error: ", error);
    return { error: "Error registering user" };
  }
};
