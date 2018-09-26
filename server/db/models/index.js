const User = require('./user')
const Review = require('./review')
const Restaurant = require('./restaurant')
const WaitTime = require('./waitTime')
const Cuisine = require('./cuisine')
const RestaurantCuisine = require('./restaurant-cuisine')
const UserRestaurant = require('./user-restaurant')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

//Reviews-Restaurant
Review.belongsTo(Restaurant)
Restaurant.hasMany(Review)

//User-Review
Review.belongsTo(User)
User.hasMany(Review)

//Cuisine-Restaurant
Cuisine.belongsToMany(Restaurant, {through: RestaurantCuisine})
Restaurant.belongsToMany(Cuisine, {through: RestaurantCuisine})

//Eager loading RestaurantCuisine
RestaurantCuisine.belongsTo(Restaurant)
Restaurant.hasMany(RestaurantCuisine)

//WaitTime-Restaurant
WaitTime.belongsTo(Restaurant)
Restaurant.hasMany(WaitTime)

//User-Restaurant
User.belongsToMany(Restaurant, {through: UserRestaurant})
Restaurant.belongsToMany(User, {through: UserRestaurant})

//Eager loading UserRestaurant
UserRestaurant.belongsTo(Restaurant)
Restaurant.hasMany(UserRestaurant)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Review,
  Restaurant,
  WaitTime,
  Cuisine,
  RestaurantCuisine,
  UserRestaurant
}
