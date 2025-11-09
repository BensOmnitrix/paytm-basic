import type { Request, Response } from "express";
import mongoose from "mongoose";
import { HTTPStatusCode } from "../statusCodes.js";
import { Account } from "../db.js";

export const transferMoney = async (req: Request,res: Response) => {
    const session = await mongoose.startSession();
    try{
        session.startTransaction();
        const {to} = req.body;
        const amount = req.body.amount*100;
        const _id = (req as any)._id!;
        const account = await Account.findOne({userId: _id}).session(session);
        if(!account){
            await session.abortTransaction();
            return res.status(HTTPStatusCode.NOT_FOUND).json({
                message: "Account does not exists"
            })
        }
        if(account.amount < amount){
            await session.abortTransaction();
            return res.status(HTTPStatusCode.CONFLICT).json({
                message: "Insufficient Balance"
            })
        }
        const toAccount = await Account.findOne({userId: to}).session(session);
        if(!toAccount){
            await session.abortTransaction();
            return res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({
                message: "Reciever account does not exists"
            })
        }
        await Account.updateOne({_id: _id},{$inc: {amount: -amount}}).session(session);
        await Account.updateOne({_id: to},{$inc: {amount: amount}}).session(session);

        await session.commitTransaction();

        return res.status(HTTPStatusCode.OK).json({
            message: "Transfer successful"
        })
    }catch(err){
        await session.abortTransaction();
        return res.status(HTTPStatusCode.CONFLICT).json({
            message: (err as any).message
        })
    }finally{
        session.endSession();
    }
}