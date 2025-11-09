import type { NextFunction, Request, Response } from "express";
import { signinSchema, signupSchema, type signinType, type signupType } from "../validation/validationSchema.js";
import { HTTPStatusCode } from "../statusCodes.js";

export const signupValidation = (req: Request,res: Response,next: NextFunction) => {
    try{
        const signupParams: signupType = req.body;
        const parsedInputs = signupSchema.safeParse(signupParams);
        if(!parsedInputs.success){
            return res.status(HTTPStatusCode.BAD_REQUEST).json({
                message: "Invalid input formats"
            })
        }
        next();
    }catch(err){
        return res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server error"
        })
    }
    
}

export const signinValidation = (req: Request,res: Response,next: NextFunction) => {
    try{
        const signinParams: signinType = req.body;
        const parsedInputs = signinSchema.safeParse(signinParams);
        if(!parsedInputs.success){
            return res.status(HTTPStatusCode.BAD_REQUEST).json({
                message: "Invalid input formats"
            })
        }
        next();
    }catch(err){
        return res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({
            message: "Internal Server error"
        })
    }

}