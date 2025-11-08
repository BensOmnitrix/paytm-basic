import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String
});
export const User = mongoose.model('User', userSchema);
