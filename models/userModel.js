import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    joinedDate: {
      type: Number,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
      required: true,
    },
    //cart will be updated later.

  })
);

export default User;