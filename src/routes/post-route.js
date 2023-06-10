const express = require('express')

const postController = require('../controllers/post-controller');

const router = express.Router();

router.post('/:groupid/create', postController.createPost)
router.get('/:postid', postController.getPostById)
router.get('/:groupid/all', postController.getAllPostByGroupId)
router.delete('/:postid/delete', postController.deletePostById)


module.exports = router