const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('reviews', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  content: {
    type: Sequelize.TEXT,
    validate: {
      isWithinRange(value) {
        if (!value.length >= 15 && value.length <= 2000) {
          throw new Error('review not within range')
        }
      }
    }
  }
})

module.exports = Review
