import { Router } from "express";

import PropertyFeatureController from "../controllers/PropertyFeatureController.js";

const router = Router();

router.get("/", PropertyFeatureController.getPropertyFeatures);
router.get("/:id", PropertyFeatureController.getPropertyFeatureById);
router.post("/", PropertyFeatureController.addPropertyFeature);
router.patch("/:id", PropertyFeatureController.updatePropertyFeature);
router.delete("/:id", PropertyFeatureController.deletePropertyFeature);

export default router;