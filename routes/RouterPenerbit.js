import express from "express";

import { createPenerbit, getPenerbit } from "../controllers/penerbitController.js";

const router = express.Router();

router.post("/penerbit", createPenerbit);
router.get("/penerbit", getPenerbit);

export default router;