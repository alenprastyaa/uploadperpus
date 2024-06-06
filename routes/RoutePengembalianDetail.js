import express from "express";
import { createPengembalianDetail, getPengembalianDetail } from "../controllers/pengembalianDetailController.js";

const router = express.Router();

router.post("/pengembalianDetail", createPengembalianDetail);
router.get("/pengembalianDetail", getPengembalianDetail);

export default router;