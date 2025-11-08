import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
const app = express();
const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;
mongoose.connect(DATABASE_URL);
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
