const router = require('express').Router();
const {CheckIn} = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const response = await CheckIn.findAll({
      attributes: ['COORDINATES', 'createdAt']
    });
    let checkIns = [];
    response.forEach(elem => checkIns.push(elem.dataValues));
    res.status(200).json(checkIns);
  } catch (error) {
    next(error);
  }
});
