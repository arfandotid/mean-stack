const express = require('express');

const PostController = require("../controllers/posts");

const checkAuth = require('../middleware/check-auth');
const extractFile = require('../middleware/file');

const router = express.Router();

router.get("", PostController.getPosts);
router.get("/:id", checkAuth, PostController.getPost);
router.post("", checkAuth, extractFile, PostController.createPosts);
router.put("/:id", checkAuth, extractFile, PostController.updatePost);
router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
