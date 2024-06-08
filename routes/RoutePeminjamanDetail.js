import express from "express";

import { createPeminjamanDetail, deletePeminjamanDetail, getPeminjamanDetail, getPeminjamanDetailById, updatePeminjamanDetail } from "../controllers/peminjamanDetailController.js";

const router = express.Router();

router.post("/peminjaman_detail", createPeminjamanDetail);
router.get("/peminjaman_detail", getPeminjamanDetail);
router.get("/peminjaman_detail/:id", getPeminjamanDetailById);
router.patch("/peminjaman_detail/:id", updatePeminjamanDetail);
router.delete("/peminjaman_detail/:id", deletePeminjamanDetail);

export default router;