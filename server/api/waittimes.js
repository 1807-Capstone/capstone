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
