const groupRepository = require('../repositories/group-repository')

exports.createGroup = group => groupRepository.createGroup(group);