const Sequelize = require('sequelize');
const User = require('./user');
const Restaurant = require('./restaurant');
const db = require('../db');

const CheckIn = db.define(
  'check-in',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
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

CheckIn.beforeCreate(async checkIn => {
  let restaurantId = checkIn.restaurantId;

  //Find restaurant
  const restaurant = await Restaurant.findById(restaurantId);
  //set long/latitude of waitTime for heat map
  let latitude = restaurant.getDataValue('location')[0];
  let longitude = restaurant.getDataValue('location')[1];
  checkIn.set('COORDINATES', [longitude, latitude]);
});

CheckIn.afterCreate(async (checkIn, options) => {
  let userId = checkIn.userId;

  const user = await User.findById(userId);
  // After User Checks in, find visited restaurants
  const response = await CheckIn.findAll({
    where: {
      userId: userId
    },
    attributes: ['restaurantId']
  });
  // Clean data
  const restaurantsVisited = response.map(elem => elem.dataValues.restaurantId);
  // Find All visited Restaurants
  user.set('checkedInRestaurants', restaurantsVisited);
  user.save();
});

module.exports = CheckIn;
