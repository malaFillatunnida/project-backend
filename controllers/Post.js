import Post from "../models/PostModel.js";

export const getAllPost = async (req, res) => {
  try {
    const post = await Post.findAll();
    res.json(post);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Pots.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(post[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    await Post.create({
      ...req.body,
      image: req.file.filename,
    });
    res.json({
      message: "Pots Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Post Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Post Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
