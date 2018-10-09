const Sequelize = require('sequelize');
const db = require('../db');
const Restaurant = require('./restaurant');

const WaitTime = db.define(
  'waitTimes',
  {
    time: {
      type: Sequelize.INTEGER
    },
    COORDINATES: {
      type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
  },
  {
    setterMethods: {
      coordinates: function(COORDINATES) {
        this.setDataValue('COORDINATES', COORDINATES);
      }
    }
  }
);

WaitTime.beforeCreate(async waitTime => {
  let restaurantId = waitTime.restaurantId;

  //Find restaurant
  const restaurant = await Restaurant.findById(restaurantId);
  //set long/latitude of waitTime for heat map
  let latitude = restaurant.getDataValue('location')[0];
  let longitude = restaurant.getDataValue('location')[1];
  waitTime.set('COORDINATES', [longitude, latitude]);
});

module.exports = WaitTime;