import type { Request, Response } from "express";
import { User } from "../db.js";
import { HTTPStatusCode } from "../statusCodes.js";

export const usersInfo = async (req: Request, res: Response) => {
  try {
    const _id = (req as any)._id;
    const filter = (req.query.filter as string);

    if (!filter) {
      return res.status(HTTPStatusCode.BAD_REQUEST).json({
        message: "Filter parameter is missing",
      });
    }

    const filteredUsers = await User.find({
      $or: [
        { firstName: { $regex: filter, $options: "i" } },
        { lastName: { $regex: filter, $options: "i" } },
      ],
    });

    return res.status(HTTPStatusCode.OK).json({
      users: filteredUsers.map(({ email, firstName, lastName, _id }) => {
        return {
          email,
          firstName,
          lastName,
          _id,
        };
      }),
      message: "Users are filtered successfully",
    });
  } catch (err) {
    return res.status(HTTPStatusCode.BAD_REQUEST).json({
      message: (err as any).message,
    });
  }
};
