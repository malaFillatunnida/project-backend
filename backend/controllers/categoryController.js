const db = require("../models");
const Category = db.category;
const Post = db.post;

exports.create = (req, res) => {
  console.log("req : ", req.body);
  if (!req.body.name) {
    res.status(400).send({
      message: "Category can not be empty!",
    });
    return;
  }

  const category = {
    name: req.body.name,
  };

  Category.create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category.",
      });
    });
};

exports.findAll = (req, res) => {
  Category.findAll({
    include: [
      {
        model: Post,
        as: "post",
        attributes: ["id", "name", "image", "title", "description"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Category.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Category.findByPk(id, { include: [{ model: Post, as: "post" }] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Category with id=" + id,
      });
    });
};

exports.addPost = (req, res) => {
  const { categoryId, postId } = req.body;
  return Category.findByPk(categoryId)
    .then((category) => {
      if (!category) {
        res.status(400).send({
          message: "Category can not be empty!",
        });
        return;
      }
      console.log("Category : ", category);
      return Post.findByPk(postId).then((post) => {
        if (!post) {
          res.status(400).send({
            message: "Post can not be empty!",
          });
          return;
        }

        category.addPost(post);
        console.log(
          `>> added Post id=${post.id} to Category id=${category.id}`
        );
        res.send(category);
      });
    })
    .catch((err) => {
      console.log(">> Error while adding Post to Category: ", err);
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Category.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Category with id=${id}. Maybe Category was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Category with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Category.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Category was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Category with id=" + id,
      });
    });
};

exports.findById = (id) => {
  return Category.findByPk(id, {
    include: [
      {
        model: Post,
        as: "post",
        attributes: ["id", "name", "image", "title", "description"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((category) => {
      return category;
    })
    .catch((err) => {
      console.log(">> Error while finding Category: ", err);
    });
};
