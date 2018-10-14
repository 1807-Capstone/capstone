const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/restaurants', require('./restaurants'));
router.use('/reviews', require('./reviews'));
router.use('/waittimes', require('./waittimes'));
router.use('/checkins', require('./checkins'));
router.use('/map', require('./map'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
