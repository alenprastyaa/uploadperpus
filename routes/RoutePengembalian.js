import express from "express";

import { createPengembalian, getPengembalian, deletePengembalian, getPengembalianByID, updatePengembalian } from "../controllers/pengembalianController.js";

const router = express.Router();

router.post("/pengembalian", createPengembalian);
router.get("/pengembalian", getPengembalian);
router.get("/pengembalian/:id", getPengembalianByID);
router.patch("/pengembalian/:id", updatePengembalian);
router.delete("/pengembalian/:id", deletePengembalian);

export default router;