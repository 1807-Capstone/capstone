const User = require('./user')
const Review = require('./review')
const Restaurant = require('./restaurant')
const WaitTime = require('./waitTime')
const CheckIn = require('./check-in')

//Reviews-Restaurant
Review.belongsTo(Restaurant)
Restaurant.hasMany(Review)

//User-Review
Review.belongsTo(User)
User.hasMany(Review)

//WaitTime-Restaurant
WaitTime.belongsTo(Restaurant)
Restaurant.hasMany(WaitTime)

//User-Restaurant
User.belongsToMany(Restaurant, {through: CheckIn})
Restaurant.belongsToMany(User, {through: CheckIn})

//Eager loading UserRestaurant
CheckIn.belongsTo(Restaurant)
Restaurant.hasMany(CheckIn)


module.exports = {
  User,
  Review,
  Restaurant,
  WaitTime,
  CheckIn
}
