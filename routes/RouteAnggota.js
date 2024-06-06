import express from "express";

import { createAnggota, getAnggota } from "../controllers/anggotaController.js";

const router = express.Router();

router.post("/anggota", createAnggota);
router.get("/angoota", getAnggota);

export default router;