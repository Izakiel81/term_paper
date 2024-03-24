import PropertyController from "../controllers/PropertyController.js";
import { Router } from "express";

const router = Router();

router.get("/", PropertyController.getProperties);
router.get("/:id", PropertyController.getPropertyById);
router.post("/", PropertyController.addProperty);
router.patch("/:id", PropertyController.updateProperty);
router.delete("/:id", PropertyController.deleteProperty);

export default router;
