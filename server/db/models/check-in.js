const Sequelize = require('sequelize');
const User = require('./user');
const db = require('../db');

const CheckIn = db.define('check-in', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
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
