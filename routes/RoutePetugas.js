import express from "express";

import { createPetugas, getPetugas } from "../controllers/petugasController.js";

const router = express.Router();

router.post("/petugas", createPetugas);
router.get("/petugas", getPetugas);

export default router;
