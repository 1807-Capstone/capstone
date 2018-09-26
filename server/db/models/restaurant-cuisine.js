const Sequelize = require('sequelize')
const db = require('../db')

const RestaurantCuisine = db.define('restaurant-cuisine', {})

module.exports = RestaurantCuisine
