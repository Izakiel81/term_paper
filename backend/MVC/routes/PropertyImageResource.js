import { Router } from "express";
import PropertyImageController from "../controllers/PropertyImageController.js";

const router = Router();

router.get("/", PropertyImageController.getPropertyImages);
router.get("/:id", PropertyImageController.getPropertyImageById);
router.get("/property/:propertyId", PropertyImageController.getPropertyImageByPropertyId);
router.post("/", PropertyImageController.addPropertyImage);
router.patch("/:id", PropertyImageController.updatePropertyImage);
router.delete("/:id", PropertyImageController.deletePropertyImage);

export default router;