const router = require('express').Router()
const yelp = require('yelp-fusion')
module.exports = router

const client = yelp.client(process.env.YELP_FUSION_API)
const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_API,
  Promise: Promise
})

router.get('/', async (req, res, next) => {
  try {
    //Google search
    const initialGoogleSearch = await googleMapsClient
      .placesNearby({
        language: 'en',
        location: [41.895579, -87.639064],
        radius: 1000,
        minprice: 1,
        maxprice: 4,
        type: 'restaurant'
      })
      .asPromise()
    const googleSearch = initialGoogleSearch.json.results

    // const finalSearch = googleSearch.map(async googleObj => {
    //   try {
    //     console.log('this is google object', googleObj.name)
    //     const initialYelpSearch = await client.search({
    //       term: googleObj.name,
    //       address1: googleObj.vicinity.split(',')[0],
    //       latitude: googleObj.geometry.location.lat,
    //       longitude: googleObj.geometry.location.lng,
    //       limit: 1
    //     })
    //     const yelpSearchResult = initialYelpSearch.jsonBody.businesses
    //     console.log('this is yelp search result', yelpSearchResult[0].name)
    //     //return {...googleObj, yelpRating: yelpSearchResult[0].rating}
    //   } catch (err) {
    //     console.error(err)
    //   }
    // })
    //res.status(200).json(finalSearch)

    //Yelp search
    // const initialYelpSearch = await client.search({
    //   term: 'food',
    //   latitude: 41.895579,
    //   longitude: -87.639064,
    //   radius: 1000
    // })
    // const yelpSearch = initialYelpSearch.jsonBody.businesses
    // console.log('this is yelp info', yelpSearch[0])

    res.status(200).json(googleSearch)
  } catch (err) {
    console.error(err)
  }
})
