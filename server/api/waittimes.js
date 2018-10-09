const router = require('express').Router();
const {WaitTime} = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const response = await WaitTime.findAll({
      attributes: ['COORDINATES', 'time']
    });
    let data = [];
    response.forEach(elem => data.push(elem.dataValues));
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    console.log('req.body', req.body);
    const newWaitTime = await WaitTime.create({
      time: req.body.waitTime.time,
      restaurantId: req.body.waitTime.restaurantId
    });
    res.json(newWaitTime);
  } catch (err) {
    next(err);
  }
});
