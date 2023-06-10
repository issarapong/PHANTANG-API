const express = require('express')

const roleController = require('../controllers/role-controller')

const router = express.Router();

router.post('/:groupid/:userid/assign', roleController.assignRoleBygroupIduserId)

router.patch('/:groupid/:userid/change', roleController.changeRoleBygroupIduserId)

router.get('/:groupid/:userid/get', roleController.getRoleBygroupIdUserId)

module.exports = router