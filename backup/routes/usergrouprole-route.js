const express = require('express')

const usergrouproleController = require('../controllers/usergrouprole-controller')

const router = express.Router();

router.post('/:groupid/:userid/assign', usergrouproleController.assignRoleBygroupIduserId)

router.patch('/:groupid/:userid/change', usergrouproleController.changeRoleBygroupIduserId)

router.get('/:groupid/:userid/get', usergrouproleController.getRoleBygroupIdUserId)

module.exports = router