import { Router } from "express";

import PropertyReviewController from "../controllers/PropertyReviewController.js";

const router = Router();

router.get("/", PropertyReviewController.getPropertyReviews);
router.get("/:id", PropertyReviewController.getPropertyReviewById);
router.post("/", PropertyReviewController.addPropertyReview);
router.patch("/:id", PropertyReviewController.updatePropertyReview);
router.delete("/:id", PropertyReviewController.deletePropertyReview);

export default router;