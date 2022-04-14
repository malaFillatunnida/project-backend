const db = require("../models");
const Comment = db.comment;

const addComment = async (req, res) => {
  const id = req.params.id;

  let data = {
    post_id: id,
    name: req.body.name,
    description: req.body.description,
  };

  const comment = await Comment.create(data);
  res.status(200).send(comment);
};

const getAllComments = async (req, res) => {
  const comments = await Comment.findAll({});
  res.status(200).send(comments);
};

module.exports = {
  addComment,
  getAllComments,
};
