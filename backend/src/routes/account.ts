import express from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { balanceDetails } from "../controllers/balance.js";
import { transferMoney } from "../controllers/transferMoney.js";

export const accountRouter = express.Router();

accountRouter.get("/balance",authMiddleware, balanceDetails);

accountRouter.post("/transfer",authMiddleware, transferMoney);
