import { Router } from "express";

import Property_PropertyFeatureController from "../controllers/Property_PropertyFeatureController.js";

const router = Router();

router.get("/", Property_PropertyFeatureController.getProperty_PropertyFeatures);
router.get("/:id", Property_PropertyFeatureController.getProperty_PropertyFeatureById);
router.post("/", Property_PropertyFeatureController.addProperty_PropertyFeature);
router.patch("/:id", Property_PropertyFeatureController.updateProperty_PropertyFeature);
router.delete("/:id", Property_PropertyFeatureController.deleteProperty_PropertyFeature);

export default router;