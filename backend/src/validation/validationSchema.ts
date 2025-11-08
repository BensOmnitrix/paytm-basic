import type { TypeExpressionOperatorReturningBoolean } from "mongoose";
import z from "zod";

export const signupSchema = z.object({
    email: z.email({message: "Invalid email format"}),
    firstName: z.string().min(1,{message: "FirstName could be empty"}),
    lastName: z.string().min(1,{message: "LastName could not be empty"}),
    password: z.string().min(8,{message: "Password is too small"}).max(15,{message: "Password is too large"})
})

export type signupType = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
    email: z.email({message: "Invalid email format"}),
    password: z.string().min(8,{message: "Password is too small"}).max(15,{message: "Password is too large"})
})

export type signinType = z.infer<typeof signinSchema>;