const router = require('express').Router()
const axios = require('axios')
const yelp = require('yelp-fusion')
module.exports = router

const client = yelp.client(process.env.YELP_FUSION_API)

router.get('/yelp', async (req, res, next) => {
  try {
    const search = await client.search({
      term: 'food',
      latitude: 41.9,
      longitude: -87.7,
      radius: 10000,
      limit: 40
    })
    const all = search.jsonBody.businesses
    res.status(200).json(all)
  } catch (err) {
    next(err)
  }
})
