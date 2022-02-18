import express from "express";


import {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Wisata.js";

// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "../frontend/public/foto");
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '_' + file.originalname)
//     },
// });

// const upload = multer({ storage: storage })

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;