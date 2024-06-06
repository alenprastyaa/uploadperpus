import express from "express";

import { createPeminjaman, getPeminjaman } from "../controllers/peminjamanController.js";

const router = express.Router();

router.post("/pemimjaman", createPeminjaman);
router.get("/peminjaman", getPeminjaman);

export default router;