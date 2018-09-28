const Sequelize = require('sequelize')
const db = require('../db')

const Restaurant = db.define('restaurants', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.NUMBER),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  imgUrl: {
    type: Sequelize.STRING
  },
  hours: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 4
    }
  },
  yelpRating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  },
  googleRating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  },
  radiusRating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
})

module.exports = Restaurant
