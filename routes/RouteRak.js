import express from "express";

import { createRak, getRak, deleteRak, getRakById, updateRak } from "../controllers/rakController.js";

const router = express.Router();

router.post("/rak", createRak);
router.get("/rak", getRak);
router.get("/rak/:id", getRakById)
router.patch("/rak/:id", updateRak)
router.delete("/rak/:id", deleteRak)

export default router;
