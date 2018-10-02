const router = require('express').Router()
const yelp = require('yelp-fusion')
const {request, GraphQLClient} = require('graphql-request')
const {
  cleanAddress,
  cleanCity,
  cleanState,
  yelpQueryMakerOne,
  yelpQueryMakerTwo
} = require('../../utils')
module.exports = router

// const client = yelp.client(process.env.YELP_FUSION_API)

const client = new GraphQLClient('https://api.yelp.com/v3/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.YELP_FUSION_API}`
  }
})

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_API,
  Promise: Promise
})

router.post('/', async (req, res, next) => {
  console.log('req.body', req.body)

  try {
    // Google search
    const initialGoogleSearch = await googleMapsClient
      .placesNearby({
        language: 'en',
        location: [req.body.lat, req.body.lng],
        // location: [41.895579, -87.639064],
        radius: 500,
        minprice: 1,
        maxprice: 4,
        type: 'restaurant'
        // keyword: 'chinese'
      })
      .asPromise()

    const googleSearch = initialGoogleSearch.json.results

    const yelpSearch = []

    // const yelpCalls = async () => {
    //   let theState
    //   let iterator = 0
    //   while (!theState) {
    //     if (googleSearch[iterator].plus_code) {
    //       theState = cleanState(googleSearch[iterator].plus_code.compound_code)
    //     }
    //     iterator++
    //   }
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

    const yelpQueryOne = yelpQueryMakerOne(googleSearch)
    const yelpQueryTwo = yelpQueryMakerTwo(googleSearch)
    const yelpResultsOne = await client.request(yelpQueryOne)
    const yelpResultsTwo = await client.request(yelpQueryTwo)

    for (let property in yelpResultsOne) {
      if (yelpResultsOne.hasOwnProperty(property)) {
        yelpSearch.push(yelpResultsOne[property].business[0])
      }
    }
    for (let property in yelpResultsTwo) {
      if (yelpResultsTwo.hasOwnProperty(property)) {
        yelpSearch.push(yelpResultsTwo[property].business[0])
      }
    }

    for (let i = 0; i < googleSearch.length; i++) {
      googleSearch[i].yelpResults = yelpSearch[i]
    }
    res.status(200).json(googleSearch)
  } catch (err) {
    console.error(err)
  }
})
