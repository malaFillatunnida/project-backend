const comment = require("../controllers/commentController");

const router = require("express").Router();

router.get("/allComments", comment.getAllComments);
router.post("/addComment/:id", comment.addComment);

module.exports = router;
