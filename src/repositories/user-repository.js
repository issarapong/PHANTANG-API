const { Op } = require('sequelize')
const { User } = require('../models')

exports.createUser = user => User.create(user)