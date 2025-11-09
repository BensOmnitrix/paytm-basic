import mongoose, { Document, Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  }
});

export const User = mongoose.model("User", userSchema);

const accountSchema = new mongoose.Schema({
  userId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
});

export const Account = mongoose.model("Account", accountSchema);