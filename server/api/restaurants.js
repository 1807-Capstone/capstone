const router = require('express').Router()
const {Restaurant, RestaurantCuisine} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll({
      attributes: [
        'name',
        'location',
        'price',
        'yelpRating',
        'googleRating',
        'radiusRating'
      ]
    })
    res.json(restaurants)
  } catch (err) {
    next(err)
  }
})

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_API,
  Promise: Promise
})

router.get('/external', async (req, res, next) => {
  try {
    const initialGoogleSearch = await googleMapsClient
      .placesNearby({
        language: 'en',
        location: [41.91, -87.67],
        radius: 1000,
        type: 'restaurant'
      })
      .asPromise()
    const googleSearch = initialGoogleSearch.json.results
    res.json(googleSearch)
  } catch (error) {
    next(error)
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
