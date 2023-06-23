const express = require('express')

const postController = require('../controllers/post-controller');
const authenticateMiddleware = require('../middlewares/authenticate');
const router = express.Router();

router.post('/', authenticateMiddleware, postController.createPost)     // ไม่ต้องระบุตามหลักการใช้ method ในการ นิยาม
router.get('/:postid', postController.getPostById)
router.get('/', postController.getAllPost)   // ไม่ต้องระบุตามหลักการใช้ method ในการ นิยาม
router.patch('/:postid/edit', authenticateMiddleware, postController.editPostbyId )
router.delete('/:postid/delete', authenticateMiddleware, postController.deletePostById)


module.exports = router