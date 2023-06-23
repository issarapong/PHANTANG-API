const express = require('express')

const commentController = require('../controllers/comment-controller')
const authenticateMiddleware = require('../middlewares/authenticate');
const router = express.Router();

router.post('/:postid/create', authenticateMiddleware, commentController.createCommentByPostId)
router.get('/:postid/', commentController.getAllCommentByPostId)
router.delete('/:commentid/delete',authenticateMiddleware, commentController.deleteCommentByCommentId)

module.exports = router