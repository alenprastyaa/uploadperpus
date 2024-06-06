import express from "express";

import { createPeminjamanDetail, getPeminjamanDetail } from "../controllers/peminjamanDetailController.js";

const router = express.Router();

router.post("/peminjaman_detail", createPeminjamanDetail);
router.get("/peminjaman_detail", getPeminjamanDetail);

export default router;