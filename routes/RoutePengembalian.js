import express from "express";

import { createPengembalian, getPengembalian } from "../controllers/pengembalianController.js";

const router = express.Router();

router.post("/pengembalian", createPengembalian);
router.get("/pengembalian", getPengembalian);

export default router;