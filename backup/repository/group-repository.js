const { Group } = require('../models')


exports.createGroupRepo = groupname => Group.create.(groupname)


// exports.getAllGroupRepo  = group => Group.findAll()

// exports.getGroupByIdRepo  =  id => Group.findByPk(id)

// exports.editGroupByIdRepo  = groupid =>


// exports.deleteGroupByIdRepo = id => Group.destroy(id);