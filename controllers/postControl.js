const asyncHandler = require("express-async-handler");
const Post = require("../models/PostModel");
const User = require("../models/UserModel");

// desc
// route /api/posts
// access PUBLIC

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id });

  res.status(200).json(posts);
});

// desc
// route /api/posts
// access PRIVATE

const createPosts = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const post = await Post.create({
    user: req.user.id,
    text: req.body.text,
  });
  res.status(200).json(post);
});

// desc
// route
// access

const updatePosts = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(401);
    throw new Error("Post not found");
  }
  const user = await User.findById(req.user.id);

  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Incorrect User");
  }

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
});

// desc
// route
// access

const deletePosts = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }
  const user = await User.findById(req.user.id);

  if (post.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Incorrect User");
  }

  await post.remove();

  res.status(200).json(post);
});

module.exports = {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
};
