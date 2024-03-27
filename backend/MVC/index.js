import { Router } from "express";
import PropertyResource from "./routes/PropertyResource.js";
import ClientResource from "./routes/ClientResource.js";
import AgentResource from "./routes/AgentResource.js";
import TransactionResource from "./routes/TransactionResource.js";
import PropertyFeatureResource from "./routes/PropertyFeatureResource.js";
import Property_PropertyFeatureResource from "./routes/Property_PropertyFeatureResource.js";
import PropertyImageResource from "./routes/PropertyImageResource.js";
import PropertyReviewResource from "./routes/PropertyReviewResource.js";
import AgentCommissionResource from "./routes/AgentCommissionResource.js";

const router = Router();

router.use('/properties', PropertyResource);
router.use('/clients', ClientResource);
router.use('/agents', AgentResource);
router.use('/transactions', TransactionResource);
router.use('/property-features', PropertyFeatureResource);
router.use('/property_property-features', Property_PropertyFeatureResource);
router.use('/property-images', PropertyImageResource);
router.use('/property-reviews', PropertyReviewResource);
router.use('/agent-commissions', AgentCommissionResource);

export default router;