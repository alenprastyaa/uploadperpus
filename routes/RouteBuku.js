import express from "express";

import { createBuku, getBuku } from "../controllers/bukuController.js";

const router = express.Router();

router.post("/buku", createBuku);
router.get("/buku", getBuku);

export default router;