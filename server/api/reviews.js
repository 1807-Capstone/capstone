const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router

router.get('/:restaurantId', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {
        restaurantId: req.params.restaurantId
      }
    })
    res.json(reviews)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newReview = await Review.create({
      content: req.body.content,
      rating: req.body.rating
    })
    res.json(newReview)
  } catch (err) {
    next(err)
  }
})
