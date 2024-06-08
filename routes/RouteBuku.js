import express from "express";

import { createBuku, deleteBuku, getBuku, getBukuById, updateBuku } from "../controllers/bukuController.js";

const router = express.Router();

router.post("/buku", createBuku);
router.get("/buku", getBuku);
router.get("/buku/:id", getBukuById);
router.patch("/buku/:id", updateBuku);
router.delete("/buku/:id", deleteBuku);

export default router;