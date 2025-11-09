import type { NextFunction, Request, Response } from "express";
import { HTTPStatusCode } from "../statusCodes.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../index.js";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(HTTPStatusCode.FORBIDDEN).json({
                message: "Invalid or expired token..Try again"
            })
        }
        const token = authHeader.split(' ')[1];
        if(!token){
            return res.status(HTTPStatusCode.BAD_REQUEST).json({
                message: "Invalid or expired token"
            })
        }
        const decode = jwt.verify(token,JWT_SECRET);
        (req as any)["_id"] = (decode as any).id;
        next();
    }catch(err){
        return res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong"
        })
    }
}