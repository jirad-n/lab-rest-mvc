const postModel = require("../models/post-model");

const getAllPost = async (req, res, next) => {
  try {
    const data = await postModel.getAllPost();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const createPost = async (req, res, next) => {
  try {
    const { author, title, body } = req.body;
    //validate and sanitize author, title, body
    await postModel.createPost(author, title, body);
    res.status(201).json("success");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
 
const updatePost = (req, res, next) => {};
const deletePost = (req, res, next) => {};

module.exports = {
  getAllPost,
  createPost,
  updatePost,
  deletePost,
};
