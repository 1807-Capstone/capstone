/* eslint-disable complexity */
/* eslint-disable max-statements */

const router = require('express').Router();
const yelp = require('yelp-fusion');
const {request, GraphQLClient} = require('graphql-request');
const {
  cleanAddress,
  cleanCity,
  cleanState,
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

router.post('/restaurantsList', async (req, res, next) => {
  const location = req.body.lat
    ? [req.body.lat, req.body.lng]
    : [-87.6345194, 41.8941717];
  try {
    const initialRestaurantsList = await googleMapsClient
      .placesNearby({
        language: 'en',
        location,
        radius: req.body.radius || 5000,
        minprice: req.body.price || 1,
        maxprice: req.body.price || 4,
        type: 'restaurant',
        keyword: req.body.cuisine || null
      })
      .asPromise();
    let secondPageToken;
    if (initialRestaurantsList.json.next_page_token) {
      secondPageToken = initialRestaurantsList.json.next_page_token;
    }
    const restaurantsList = initialRestaurantsList.json.results;
    res.status(200).json({restaurantsList, secondPageToken});
  } catch (error) {
    next(error);
  }
});

router.post('/nextPage', async (req, res, next) => {
  try {
    const nextRestaurantsPage = await googleMapsClient
      .placesNearby({
        pagetoken: req.body.token
      })
      .asPromise();
    const nextPage = nextRestaurantsPage.json.results;
    res.status(200).json(nextPage);
  } catch (error) {
    next(error);
  }
});

router.post('/popups', async (req, res, next) => {
  try {
    const {prevRestaurantsList, googleRestaurantObj} = req.body;

    //Find state for yelpQuery
    let theState = '';
    let iterator = 0;
    while (!theState) {
      if (prevRestaurantsList[iterator].plus_code) {
        theState = cleanState(
          prevRestaurantsList[iterator].plus_code.compound_code
        );
      }
      iterator++;
    }

    // Find possible Radius Entry
    const response = await Restaurant.findOne({
      where: {
        name: googleRestaurantObj.name
      }
    });

    // Find possible Yelp Entry
    const yelpQuery = yelpQueryMaker(googleRestaurantObj, theState);
    const yelpResponse = await client.request(yelpQuery);

    // declare popupInfo
    let popupInfo;

    for (let i = 0; i < prevRestaurantsList.length; i++) {
      if (prevRestaurantsList[i].name === googleRestaurantObj.name) {
        if (response) {
          prevRestaurantsList[i].radiusRating =
            response.dataValues.radiusRating;
          prevRestaurantsList[i].yelpImg =
            response.dataValues.yelpImg && response.dataValues.yelpImg;
          prevRestaurantsList[i].yelpRating =
            yelpResponse.b1.total === 1 && yelpResponse.b1.business[0].rating;
          popupInfo = prevRestaurantsList[i];
        }
        if (yelpResponse.b1.total === 1) {
          prevRestaurantsList[i].yelpRating =
            yelpResponse.b1.business[0].rating;
          prevRestaurantsList[i].yelpImg =
            yelpResponse.b1.business[0].photos[0];
          popupInfo = prevRestaurantsList[i];
        }
        if (!response && yelpResponse.b1.total === 1) {
          let newRestaurant = await Restaurant.create({
            name: prevRestaurantsList[i].name,
            location: [
              prevRestaurantsList[i].geometry.location.lat,
              prevRestaurantsList[i].geometry.location.lng
            ],
            price_level: prevRestaurantsList[i].price_level,
            rating: prevRestaurantsList[i].rating,
            radiusRating:
              (prevRestaurantsList[i].rating +
                yelpResponse.b1.business[0].rating) /
              2,
            yelpRating: yelpResponse.b1.business[0].rating,
            yelpImg:
              yelpResponse.b1.business[0].photos &&
              yelpResponse.b1.business[0].photos[0],
            vicinity: cleanAddress(prevRestaurantsList[i].vicinity)
          });
          prevRestaurantsList[i].radiusRating =
            (prevRestaurantsList[i].rating +
              yelpResponse.b1.business[0].rating) /
            2;
        }
        if (!response && yelpResponse.b1.total < 1) {
          let newRestaurant = await Restaurant.create({
            name: prevRestaurantsList[i].name,
            location: [
              prevRestaurantsList[i].geometry.location.lat,
              prevRestaurantsList[i].geometry.location.lng
            ],
            price_level: prevRestaurantsList[i].price_level,
            rating: prevRestaurantsList[i].rating,
            radiusRating: prevRestaurantsList[i].rating,
            vicinity: cleanAddress(prevRestaurantsList[i].vicinity)
          });
          prevRestaurantsList[i].radiusRating = prevRestaurantsList[i].rating;
        }

        break;
      }
    }

    res.status(200).json({prevRestaurantsList, popupInfo});
  } catch (error) {
    next(error);
  }
});
