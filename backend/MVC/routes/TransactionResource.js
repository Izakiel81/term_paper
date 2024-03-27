import { Router } from "express";

import TransactionController from "../controllers/TransactionController.js";

const router = Router();

router.get("/", TransactionController.getTransactions);
router.get("/:id", TransactionController.getTransactionById);
router.post("/", TransactionController.addTransaction);
router.patch("/:id", TransactionController.updateTransaction);
router.delete("/:id", TransactionController.deleteTransaction);

export default router;