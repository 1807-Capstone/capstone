const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/restaurants', require('./restaurants'));
router.use('/testaurants', require('./testaurants'));
router.use('/reviews', require('./reviews'));
router.use('/waittimes', require('./waittimes'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
