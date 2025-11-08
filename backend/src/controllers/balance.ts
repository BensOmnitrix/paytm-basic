import type { Request, Response } from "express";
import { Account } from "../db.js";
import { HTTPStatusCode } from "../statusCodes.js";

export const balanceDetails = async (req: Request, res: Response) => {
    try{
        const _id = (req as any)._id;    
        const account = await Account.findOne({userId: _id});
        if(!account){
            return res.status(HTTPStatusCode.NOT_FOUND).json({
                message: "Account does not exists"
            })
        }
        return res.status(HTTPStatusCode.OK).json({
            message: "Account Balance fetched successfully",
            accountBalance: account.amount/100
        })
    }catch(err){
        return res.status(HTTPStatusCode.FORBIDDEN).json({
            message: "Access denied"
        })
    }

}