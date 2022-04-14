const category = require("../controllers/categoryController");

const router = require("express").Router();

router.post("/", category.create);
router.get("/", category.findAll);
router.get("/:id", category.findById);
router.post("/Post", category.addPost);
router.put("/:id", category.update);
router.delete("/:id", category.delete);

module.exports = router;
