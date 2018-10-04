const Sequelize = require('sequelize');
const db = require('../db');

const Restaurant = db.define('restaurants', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  geometry: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  },
  price_level: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 4
    }
  },
  rating: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1,
      max: 5
    }
  },
  yelpRating: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1,
      max: 5
    }
  },
  yelpImg: {
    type: Sequelize.STRING
  },
  vicinity: {
    type: Sequelize.STRING
  },
  radiusRating: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1,
      max: 5
    }
  }
});

module.exports = Restaurant;
