import express from "express";

import { createPenerbit, deletePenerbit, getPenerbit, getPenerbitById, updatePenerbit } from "../controllers/penerbitController.js";

const router = express.Router();

router.post("/penerbit", createPenerbit);
router.get("/penerbit", getPenerbit);
router.get("/penerbit/:id", getPenerbitById);
router.patch("/penerbit/:id", updatePenerbit);
router.delete("/penerbit/:id", deletePenerbit);

export default router;