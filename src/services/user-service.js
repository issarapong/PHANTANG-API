const userRepository = require('../repositories/user-repository')

exports.createUser = user => userRepository.createUser(user);