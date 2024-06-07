import express from "express";

import { createPengarang, getPengarang } from "../controllers/pengarangController.js";

const router = express.Router();

router.post("/pengarang", createPengarang);
router.get("/pengarang", getPengarang);

export default router;