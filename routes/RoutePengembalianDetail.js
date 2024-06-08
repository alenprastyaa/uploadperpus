import express from "express";
import { createPengembalianDetail, getPengembalianDetail, deletePengembalianDetail, getPengembalianDetailById, updatePengembalianDetail } from "../controllers/pengembalianDetailController.js";

const router = express.Router();

router.post("/pengembalianDetail", createPengembalianDetail);
router.get("/pengembalianDetail", getPengembalianDetail);
router.get("/pengembalianDetail/:id", getPengembalianDetailById)
router.patch("/pengembalianDetail/:id", updatePengembalianDetail)
router.delete("/pengembalianDetail/:id", deletePengembalianDetail)

export default router;