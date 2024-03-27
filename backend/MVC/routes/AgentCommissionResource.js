import { Router } from "express";

import AgentCommissionController from "../controllers/AgentCommissionController.js";

const router = Router();

router.get("/", AgentCommissionController.getAgentCommissions);
router.get("/:id", AgentCommissionController.getAgentCommissionById);
router.post("/", AgentCommissionController.addAgentCommission);
router.patch("/:id", AgentCommissionController.updateAgentCommission);
router.delete("/:id", AgentCommissionController.deleteAgentCommission);

export default router;