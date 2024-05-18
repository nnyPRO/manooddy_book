import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      dd: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 35,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model('User', userSchema);

export default User;