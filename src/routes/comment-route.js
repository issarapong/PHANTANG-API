const express = require('express')

const commentController = require('../controllers/comment-controller')

const router = express.Router();

router.post('/:postid/create', commentController.createCommentByPostId)
router.get('/:postid/all', commentController.getAllCommentByPostId)
router.delete('/:commentid/delete',commentController.deleteCommentByCommentId)

module.exports = router