import express from "express";

import {
  getAllKategori,
  createKategori,
  getKategoriById,
  updateKategori,
  deleteKategori,
} from "../controllers/kategori.js";

const router = express.Router();

router.get("/", getAllKategori);
router.get("/:id", getKategoriById);
router.post("/", createKategori);
router.patch("/:id", updateKategori);
router.delete("/:id", deleteKategori);

export default router;
