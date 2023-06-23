const express = require('express')

const groupController = require('../controllers/group-controller')
const authenticateMiddleware = require('../middlewares/authenticate');
const router = express.Router();

router.post('/create', authenticateMiddleware, groupController.createGroup)
router.get('/all', groupController.getAllGroup)
router.get('/:groupid', groupController.getGroupById )
router.patch('/:groupid/edit', authenticateMiddleware, groupController.editGroupById )
router.delete('/:groupid/delete',authenticateMiddleware, groupController.deleteGroupById)

module.exports = router;



// lใส่ authenticateMiddleware เพื่อ auth และรับค่า id โดยถอดจาก Token key