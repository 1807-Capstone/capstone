const router = require('express').Router()
const {Restaurant, RestaurantCuisine} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll({
      attributes: ['name', 'location', 'price', 'yelpRating', 'googleRating', 'radiusRating']
    })
    res.json(restaurants)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({
      where: {
        id: req.params.id
      },
      include: [{model: RestaurantCuisine}]
    })
    res.json(restaurant)
  } catch (err) {
    next(err)
  }
})
