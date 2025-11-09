import type { Request, Response } from "express";
import type { signinType } from "../validation/validationSchema.js";
import { User } from "../db.js";
import { HTTPStatusCode } from "../statusCodes.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../index.js";

export const signin = async (req: Request, res: Response) => {
    try{
        const parsedInputs: signinType = req.body;
        const email = parsedInputs.email;
        const password = parsedInputs.password;

        const existingUser = await User.findOne({email: email});

        if(!existingUser  || !(await bcrypt.compare(password,existingUser.password))){
            return res.status(HTTPStatusCode.FORBIDDEN).json({
                message: "Username or password is incorrect"
            })
        }

        const token = jwt.sign({id:existingUser._id},JWT_SECRET,{expiresIn:"1h"});

        return res.status(HTTPStatusCode.CREATED).json({
            message: "User login successfull",
            token : token
        })

    }catch(err){
        return res.status(HTTPStatusCode.BAD_REQUEST).json({
            message: (err as any).message
        })
    }
}