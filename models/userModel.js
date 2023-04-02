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
      default: Date.now,
    },
    role: {
      type: String,
      default:"shopper",
      required: true,
    },
    //cart will be updated later.

  })
);

export default User;