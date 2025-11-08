import express from "express";
import { signinValidation, signupValidation } from "../middlewares/validation.js";
import { signup } from "../controllers/signup.js";
import { signin } from "../controllers/signin.js";
import { authMiddleware } from "../middlewares/auth.js";
import { updateUserDetails } from "../controllers/updateUserDetails.js";
import { usersInfo } from "../controllers/usersInfo.js";

export const userRouter = express.Router();

userRouter.post("/signup",signupValidation,signup);

userRouter.get("/signin",signinValidation,signin);

userRouter.use(authMiddleware);

userRouter.put("/user",updateUserDetails);

userRouter.get("/bulk",usersInfo)