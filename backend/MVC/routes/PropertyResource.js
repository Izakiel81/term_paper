import PropertyController from "../controllers/PropertyController.js";
import { Router } from "express";

const router = Router();

router.get('/', PropertyController.getProperties);


export default router;