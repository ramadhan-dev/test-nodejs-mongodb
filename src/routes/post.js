const express = require('express');
const postController = require('./../controllers/postController');
const router = express.Router();
const { postMiddleware } = require('./../Helpers/middlewares/postMiddleware');
const { secondMiddleware } = require('./../Helpers/middlewares/secondMiddleware');
const { createPost } = require('./../Helpers/validators/post');

router.get('/', [secondMiddleware], postController.getPost);
router.get('/:id', postController.pagePost);
router.post('/', [postMiddleware, secondMiddleware, createPost], postController.createPost);

module.exports = router;
