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

router.get('/', async (req, res, next) => {
  console.log('** Starting post Req')
  try {
    //Google search
    const initialGoogleSearch = await googleMapsClient
      .placesNearby({
        language: 'en',
        location: [41.895579, -87.639064],
        radius: 1500,
        minprice: 1,
        maxprice: 4,
        type: 'restaurant',
        keyword: 'chinese'
      })
      .asPromise()
    console.log('** Got Google Results')
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
    // console.log('** Running Yelp Wrapper')
    // console.log('** yelpResults :', yelpResults)

    const yelpQueryOne = yelpQueryMakerOne(googleSearch)
    console.log('** 1st Query Created')
    const yelpQueryTwo = yelpQueryMakerTwo(googleSearch)
    console.log('** Second Query Created')
    const yelpResultsOne = await client.request(yelpQueryOne)
    console.log('** First Yelp Query Received')
    const yelpResultsTwo = await client.request(yelpQueryTwo)
    console.log('** Second Yelp Query Received')

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
    console.log('** Yelp Array Created')

    for (let i = 0; i < googleSearch.length; i++) {
      googleSearch[i].yelpResults = yelpSearch[i]
    }
    res.status(200).json(googleSearch)

    // console.log('** Done!')

    // let yelpResults = 'hi'
    // console.log('yelp query length: ', yelpQuery)

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
  } catch (err) {
    console.error(err)
  }
})
