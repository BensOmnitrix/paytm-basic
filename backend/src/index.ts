import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { mainRouter } from "./routes/index.js";
const app = express();
export const DATABASE_URL = process.env.DATABASE_URL!;
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET!;
export const SALT_ROUNDS = Number(process.env.SALT_ROUNDS!);

mongoose.connect(DATABASE_URL)

app.use(cors());
app.use(express.json());

app.use("/api/v1",mainRouter);

app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`);
})