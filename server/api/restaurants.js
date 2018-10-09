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

// const client = yelp.client(process.env.YELP_FUSION_API);

const client = new GraphQLClient('https://api.yelp.com/v3/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.YELP_FUSION_API}`
  }
});

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_API,
  Promise: Promise
});

router.post('/', async (req, res, next) => {
  try {
    // Google search
    const initialGoogleSearch = await googleMapsClient
      .placesNearby({
        language: 'en',
        // location: [req.body.lat, req.body.lng],
        location: [41.895579, -87.639064],
        radius: 500,
        minprice: 1,
        maxprice: 4,
        type: 'restaurant'
      })
      .asPromise();

    const googleSearch = initialGoogleSearch.json.results;

    const yelpSearch = [];

    //   for (let i = 0; i < googleSearch.length; i++) {
    //     await (function(index) {
    //       setTimeout(async () => {
    //         let newResult = await client.businessMatch('best', {
    //           name: googleSearch[i].name,
    //           address1: cleanAddress(googleSearch[i].vicinity),
    //           city: cleanCity(googleSearch[i].vicinity),
    //           state: theState,
    //           country: 'US'
    //         })
    //         yelpSearch.push(newResult)
    //         console.log('yelpResults ', yelpSearch[i].jsonBody.businesses[0].name, googleSearch[i].name)
    //       }, 150 + 250 * index)
    //     })(i)
    //   }
    //   console.log(`finished`)
    // }

    // function yelpWrapper() {
    //   yelpCalls()
    //   setTimeout(function() {
    //     console.log('** Beginning setTimeout function')
    //     for (let i = 0; i < googleSearch.length; i++) {
    //       googleSearch[i].yelpResults = yelpSearch[i].jsonBody.businesses[0]
    //     }
    //     console.log('** Ran Yelp Wrapper')
    //     // console.log('** Google Search Modified Array ', googleSearch)
    //     res.status(200).json(googleSearch)
    //   }, 8000)
    // }

    // yelpWrapper();

    // const yelpQueryOne = yelpQueryMakerOne(googleSearch)
    // const yelpQueryTwo = yelpQueryMakerTwo(googleSearch)
    // const yelpResultsOne = await client.request(yelpQueryOne)
    // const yelpResultsTwo = await client.request(yelpQueryTwo)

    // for (let property in yelpResultsOne) {
    //   if (yelpResultsOne.hasOwnProperty(property)) {
    //     yelpSearch.push(yelpResultsOne[property].business[0])
    //   }
    // }
    // for (let property in yelpResultsTwo) {
    //   if (yelpResultsTwo.hasOwnProperty(property)) {
    //     yelpSearch.push(yelpResultsTwo[property].business[0])
    //   }
    // }

    // for (let i = 0; i < googleSearch.length; i++) {
    //   googleSearch[i].yelpResults = yelpSearch[i]
    // }
    res.status(200).json(googleSearch);
  } catch (err) {
    console.error(err);
  }
});

router.post('/filteredGoogle', async (req, res, next) => {
  try {
    const initialGoogleSearch = await googleMapsClient
      .placesNearby({
        language: 'en',
        location: [req.body.lat, req.body.lng],
        radius: req.body.distance || 500,
        minprice: req.body.price || 1,
        maxprice: req.body.price || 4,
        type: 'restaurant',
        keyword: req.body.cuisine || null
        // rating: req.body.rating || null
      })
      .asPromise();

    const googleSearch = initialGoogleSearch.json.results;
    // res.status(200).json(googleSearch);

    const yelpSearch = [];

    // const yelpQueryOne = yelpQueryMaker(googleSearch[0]);
    // const yelpResultsOne = await client.request(yelpQueryOne);

    // const yelpQueryTwo = yelpQueryMaker(googleSearch[1]);
    // const yelpResultsTwo = await client.request(yelpQueryTwo);

    // const yelpQueryThree = yelpQueryMaker(googleSearch[2]);
    // const yelpResultsThree = await client.request(yelpQueryThree);

    // const yelpQueryFour = yelpQueryMaker(googleSearch[3]);
    // const yelpResultsFour = await client.request(yelpQueryFour);

    // for (let property in yelpResultsOne) {
    //   if (yelpResultsOne.hasOwnProperty(property)) {
    //     yelpSearch.push(yelpResultsOne[property].business[0]);
    //     googleSearch[0].yelpResults = yelpSearch[0];
    //   }
    // }

    // for (let property in yelpResultsTwo) {
    //   if (yelpResultsTwo.hasOwnProperty(property)) {
    //     yelpSearch.push(yelpResultsTwo[property].business[0]);
    //     googleSearch[1].yelpResults = yelpSearch[1];
    //   }
    // }

    // for (let property in yelpResultsThree) {
    //   if (yelpResultsThree.hasOwnProperty(property)) {
    //     yelpSearch.push(yelpResultsThree[property].business[0]);
    //     googleSearch[2].yelpResults = yelpSearch[2];
    //   }
    // }

    // for (let property in yelpResultsFour) {
    //   if (yelpResultsFour.hasOwnProperty(property)) {
    //     yelpSearch.push(yelpResultsFour[property].business[0]);
    //     googleSearch[3].yelpResults = yelpSearch[3];
    //   }
    // }

    // for (let i = 0; i < googleSearch.length; i++) {
    //   googleSearch[i].yelpResults = yelpSearch[i];
    // }

    // res.status(200).json(googleSearch);
    //
    const yelpCalls1 = async () => {
      let theState;
      let iterator = 0;
      while (!theState) {
        if (googleSearch[iterator].plus_code) {
          theState = cleanState(googleSearch[iterator].plus_code.compound_code);
        }
        iterator++;
      }
      try {
        for (let i = 0; i < 5; i++) {
          (function(index) {
            setTimeout(async () => {
              let city = cleanCity(googleSearch[i].vicinity);
              let state = theState;
              let newResult = await client.search({
                term: `${googleSearch[i].name}`,
                location: `${city}, ${state}`
              });
              yelpSearch.push(newResult);

              googleSearch[i].yelpResults =
                yelpSearch[i].jsonBody.businesses[0];
            }, 5000 + 1000 * index);
          })(i);
          // res.json(googleSearch);
        }
      } catch (error) {
        next(error);
      }
    };

    // yelpCalls1();

    const yelpWrapper = () => {
      yelpCalls1();
      //   yelpCalls2();

      setTimeout(function() {
        // console.log('** Beginning setTimeout function');
        for (let i = 0; i < 5; i++) {
          googleSearch[i].yelpResults = yelpSearch[i].jsonBody.businesses[0];
        }
        // console.log('** Ran Yelp Wrapper');

        //     for (let i = 5; i < 10; i++) {
        //       console.log('** yelpSearch[i]', yelpSearch[i].jsonBody.businesses[0]);
        //       googleSearch[i].yelpResults = yelpSearch[i].jsonBody.businesses[0];
        //     }
        //     // console.log('** Google Search Modified Array ', googleSearch)
        res.status(200).json(googleSearch);
      }, 10000);
    };

    yelpWrapper();
    // res.json(googleSearch);
  } catch (error) {
    next(error);
  }
});

router.post('/yelp', async (req, res, next) => {
  try {
    const yelpSearch = [];

    const yelpQueryOne = yelpQueryMakerOne(googleSearch);
    const yelpQueryTwo = yelpQueryMakerTwo(googleSearch);
    const yelpResultsOne = await client.request(yelpQueryOne);
    const yelpResultsTwo = await client.request(yelpQueryTwo);

    for (let property in yelpResultsOne) {
      if (yelpResultsOne.hasOwnProperty(property)) {
        yelpSearch.push(yelpResultsOne[property].business[0]);
      }
    }
    for (let property in yelpResultsTwo) {
      if (yelpResultsTwo.hasOwnProperty(property)) {
        yelpSearch.push(yelpResultsTwo[property].business[0]);
      }
    }

    for (let i = 0; i < googleSearch.length; i++) {
      googleSearch[i].yelpResults = yelpSearch[i];
    }
    res.status(200).json(googleSearch);
  } catch (error) {
    next(error);
  }
});

router.post('/filteredServer', async (req, res, next) => {
  try {
    const currentFilters = {};
    if (req.body.price) {
      currentFilters.price_level = req.body.price;
    }
    if (req.body.rating) {
      currentFilters.radiusRating = req.body.rating;
    }
    if (req.body.cuisine) {
      currentFilters.keyword = req.body.cuisine;
    }
    const filteredRestaurants = await Restaurant.findAll({
      where: currentFilters
    });
    res.json(filteredRestaurants);
  } catch (error) {
    next(error);
  }
});

// router.post('/allRestaurants', async (req, res, next) => {
//   const Op = Sequelize.Op;
//   try {
//     const allRestaurants = await Restaurant.findAll({
//       where: {
//         // location: [
//         //   {
//         //     [Op.or]: {
//         //       [Op.lt]: req.body.lat + 1,
//         //       [Op.gt]: req.body.lat - 1
//         //     },
//         //     [Op.or]: {
//         //       [Op.lt]: req.body.lng + 1,
//         //       [Op.gt]: req.body.lng - 1
//         //     }
//         //   }
//         // ]
//         location: [
//           {[Op.between]: [req.body.lat + 1, req.body.lat - 1]},
//           {[Op.between]: [req.body.lng + 1, req.body.lng - 1]}
//         ]
//       }
//     });
//     res.json(allRestaurants);
//   } catch (err) {
//     next(err);
//   }
// });

// `<a href="https://maps.google.com/maps/dir/?daddr=${
//   restaurant.geometry.location.lat
// },${restaurant.geometry.location.lng}&amp;ll=" target =_blank>directions</a>`;
