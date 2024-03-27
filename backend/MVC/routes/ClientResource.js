import { Router } from "express";
import ClientController from "../controllers/ClientController.js";

const router = Router();

router.get("/", ClientController.getClients);
router.get("/:id", ClientController.getClientById);
router.post("/", ClientController.addClient);
router.patch("/:id", ClientController.updateClient);
router.delete("/:id", ClientController.deleteClient);


export default router;