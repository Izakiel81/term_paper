import { Router } from "express";
import PropertyResource from "./routes/PropertyResource.js";

const router = Router();

router.use('/properties', PropertyResource);

export default router;