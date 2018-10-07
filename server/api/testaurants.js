const router = require('express').Router();
const yelp = require('yelp-fusion');
const {request, GraphQLClient} = require('graphql-request');
const {
  cleanAddress,
  cleanCity,
  cleanState,
  yelpQueryMakerOne,
  yelpQueryMakerTwo,
  yelpQueryMaker
} = require('../../utils');
const {Restaurant} = require('../db/models');
module.exports = router;

const client = new GraphQLClient('https://api.yelp.com/v3/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.YELP_FUSION_API}`
  }
});

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_API,
  Promise: Promise
});

router.post('/restaurantsList', async (res, req, next) => {
  console.log(req.body);
  try {
    const initialRestaurantsList = await googleMapsClient
      .placesNearby({
        language: 'en',
        location: [req.body.lat, req.body.lng],
        radius: req.body.radius || 1500,
        minprice: req.body.price || 1,
        maxprice: req.body.price || 4,
        type: 'restaurant',
        keyword: req.body.cuisine || null
      })
      .asPromise();

    const restaurantsList = initialRestaurantsList.json.results;
    res.status(200).json(restaurantsList);
  } catch (error) {
    next(error);
  }
});
