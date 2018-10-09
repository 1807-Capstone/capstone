const router = require('express').Router();
const {Review, Restaurant} = require('../db/models');
module.exports = router;

router.post('/getreviews', async (req, res, next) => {
  try {
    const data = await Restaurant.findAll({
      where: {
        name: req.body.name
      }
    });
    const reviews = await Review.findAll({
      where: {
        restaurantId: data[0].dataValues.id
      }
    });
    res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newReview = await Review.create({
      userId: req.body.userId,
      restaurantId: req.body.restaurantId,
      rating: req.body.rating
    });
    res.json(newReview);
  } catch (err) {
    next(err);
  }
});
