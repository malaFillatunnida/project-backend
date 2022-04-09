import express from "express";

import {
  getAllPost,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/Post.js";

const router = express.Router();

router.get("/", getAllPost);
router.get("/:id", getPostById);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
