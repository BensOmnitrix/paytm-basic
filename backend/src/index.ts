import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import { mainRouter } from "./routes/index.js";
const app = express();
const DATABASE_URL = process.env.DATABASE_URL!;
const PORT = process.env.PORT;

mongoose.connect(DATABASE_URL)

app.use(cors());
app.use(express.json());

app.use("/api/v1",mainRouter);

app.listen(PORT,() => {
    console.log(`Server is listening on ${PORT}`);
})