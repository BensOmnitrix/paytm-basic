import type { Request, Response } from "express";
import { User } from "../db.js";
import { HTTPStatusCode } from "../statusCodes.js";

interface UpdateParams {
    email?: string;
    firstName?: string;
    lastName?: string;
}

export const updateUserDetails = async (req: Request, res: Response) => {
    const id = (req as any).decode;
    const updateParams: UpdateParams = req.body;

    const response = await User.findByIdAndUpdate({id: id},updateParams);
    if(!response){
        return res.status(HTTPStatusCode.BAD_REQUEST).json({
            message: "Updated successfully"
        })
    }

    return res.status(HTTPStatusCode.OK).json({
        message: "Error while updating information"
    })
}