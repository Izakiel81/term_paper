import { Router } from "express";
import PropertyResource from "./routes/PropertyResource.js";
import ClientResource from "./routes/ClientResource.js";
import AgentResource from "./routes/AgentResource.js";

const router = Router();

router.use('/properties', PropertyResource);
router.use('/clients', ClientResource);
router.use('/agents', AgentResource);

export default router;