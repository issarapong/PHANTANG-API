const { sequelize } = require('../models');
sequelize.sync({forec: true});