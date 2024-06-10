import express from "express";

import { createPengarang, deletePengarang, getPengarang, getPengarangById, updatePengarang } from "../controllers/pengarangController.js";

const router = express.Router();

router.post("/pengarang", createPengarang);
router.get("/pengarang", getPengarang);
router.get("/pengarang/:id", getPengarangById);
router.patch("/pengarang/:id", updatePengarang);
router.delete("/pengarang/:id", deletePengarang);

export default router;