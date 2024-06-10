import express from "express";

import { createPeminjaman, deletePeminjaman, getPeminjaman, getPeminjamanById, updatePeminjaman } from "../controllers/peminjamanController.js";

const router = express.Router();

router.post("/pemimjaman", createPeminjaman);
router.get("/peminjaman", getPeminjaman);
router.get("/peminjaman/:id", getPeminjamanById);
router.patch("/peminjaman/:id", updatePeminjaman);
router.delete("/peminjaman/:id", deletePeminjaman);

export default router;