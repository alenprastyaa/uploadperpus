import express from "express";

import { createRak, getRak } from "../controllers/rakController.js";

const router = express.Router();

router.post("/rak", createRak);
router.get("/rak", getRak);

export default router;
