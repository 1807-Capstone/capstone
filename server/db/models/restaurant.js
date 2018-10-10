const Sequelize = require('sequelize');
const db = require('../db');

const Restaurant = db.define(
  'restaurants',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    location: {
      type: Sequelize.ARRAY(Sequelize.FLOAT),
      allowNull: false
    },
    lat: {
      type: Sequelize.FLOAT
    },
    lng: {
      type: Sequelize.FLOAT
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
      type: Sequelize.FLOAT,
      validate: {
        min: 1,
        max: 5
      }
    },
    yelpRating: {
      type: Sequelize.FLOAT,
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
      type: Sequelize.FLOAT,
      validate: {
        min: 1,
        max: 5
      }
    },
    keyword: {
      type: Sequelize.STRING
    }
  },
  {
    getterMethods: {
      yelpResults: function() {
        return {rating: this.yelpRating, image_url: this.yelpImg};
      },
      geometry: function() {
        return {location: {lat: this.location[0], lng: this.location[1]}};
      }
    }
  }
);

Restaurant.afterValidate(restaurant => {
  const [lat, lng] = restaurant.location;
  restaurant.lat = lat;
  restaurant.lng = lng;
});

module.exports = Restaurant;
