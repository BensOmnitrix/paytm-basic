  import mongoose, { Document, Schema } from "mongoose";

  export interface IUser extends Document {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  }

  const userSchema: Schema<IUser> = new mongoose.Schema({
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

  export const User = mongoose.model<IUser>("User", userSchema);

  export interface IAccount extends Document {
    userId : IUser["_id"];
    amount: number;
  }

  const accountSchema: Schema<IAccount> = new mongoose.Schema({
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

  export const Account = mongoose.model<IAccount>("Account", accountSchema);