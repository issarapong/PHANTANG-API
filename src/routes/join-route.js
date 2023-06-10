const express = require('express')
const joinController = require('../controllers/join-controller')

const router = express.Router();

// joinRequest /joinAccept / JoinCancel /JoinReject

router.post('/:groupid/request', joinController.joinRequest)
router.post('/:requestid/accept', joinController.joinAccept)
router.delete('/:requestid/cancel', joinController.joinCancel)
router.delete('/:requestid/reject', joinController.joinReject)


module.exports = router;