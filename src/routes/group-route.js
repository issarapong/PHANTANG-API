const express = require('express')

const groupController = require('../controllers/group-controller')

const router = express.Router();

router.post('/create', groupController.createGroup)
router.get('/all', groupController.getAllGroup)
router.get('/:groupid', groupController.getGroupById )
router.delete('/:groupid/delete', groupController.deleteGroupById)

module.exports = router;

