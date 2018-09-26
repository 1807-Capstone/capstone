const Sequelize = require('sequelize')
const db = require('../db')

const UserRestaurant = db.define('user-restaurant', {})

module.exports = UserRestaurant
