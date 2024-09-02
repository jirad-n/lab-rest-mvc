const commentModel = require("../models/comment-model");
const postModel = require("../models/post-model");

exports.getCommentByPostId = (req, res, next) => {};
exports.createComment = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { commenter, comment } = req.body;
    await commentModel.createComment(postId, commenter, comment);
    res.status(201).json("success");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.updateComment = (req, res, next) => {};
exports.deleteComment = (req, res, next) => {};
