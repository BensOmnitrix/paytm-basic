import type { Request, Response } from "express";
import { HTTPStatusCode } from "../statusCodes.js";
import type { signupType } from "../validation/validationSchema.js";
import { User } from "../db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const JWT_SECRET = process.env.JWT_SECRET!;
const SALT_ROUNDS = process.env.SALT_ROUNDS!;

export const signup = async (req: Request, res: Response) => {
    try{
        const parsedInputs: signupType = req.body;
        const email = parsedInputs.email;
        const firstName = parsedInputs.firstName;
        const lastName = parsedInputs.lastName;
        const password = parsedInputs.password;

        const response = await User.findOne({email});

        if(response){
            return res.status(HTTPStatusCode.FORBIDDEN).json({
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password,SALT_ROUNDS);

        const newUser = await User.create({
            email,
            firstName,
            lastName,
            password: hashedPassword
        })

        const token = jwt.sign(newUser.id,JWT_SECRET,{expiresIn:"1h"});

        return res.status(HTTPStatusCode.CREATED).json({
            message: "User signed up successfully",
            token : token
        })

    }catch(errs){
        return res.status(HTTPStatusCode.BAD_REQUEST).json({
            message: "Something went wrong"
        })
    }
}