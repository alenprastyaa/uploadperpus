import express from "express";

import { createAnggota, getAnggota, deleteAnggota, getAnggotaById, updateAnggota } from "../controllers/anggotaController.js";

const router = express.Router();

router.post("/anggota", createAnggota);
router.get("/anggota", getAnggota);
router.get("/anggota/:id", getAnggotaById);
router.delete("/anggota/:id", deleteAnggota);
router.patch("/anggota/:id", updateAnggota);



export default router;