const router = require('express').Router();
module.exports = router;



router.get('/retrievecenter', async (req, res, next) => {
  try {
    res.json(process.env.GOOGLE_MAPS_API)
  } catch (err) {
    next(err)
  }
});
