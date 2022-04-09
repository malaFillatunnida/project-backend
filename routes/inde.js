import express from "express";
import multer from "multer";
import {
  getAllPost,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/Post.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/", getAllPost);
router.get("/:id", getPostById);
router.post("/", upload.single("image"), createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
