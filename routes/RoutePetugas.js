import express from "express";

import { createPetugas, getPetugas, deletePetugas, getPetugasById, updatePetugas } from "../controllers/petugasController.js";

const router = express.Router();

router.post("/petugas", createPetugas);
router.get("/petugas", getPetugas);
router.get("/petugas/:id", getPetugasById)
router.patch("/petugas/:id", updatePetugas)
router.delete("/petugas/:id", deletePetugas)

export default router;
