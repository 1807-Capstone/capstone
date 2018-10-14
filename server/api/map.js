const router = require('express').Router();
const axios = require('axios');
module.exports = router;

router.post('/retrievecenter', async (req, res, next) => {
  try {
    const {data} = await axios.post(
      `https://www.googleapis.com/geolocation/v1/geolocate?key=${
        process.env.GOOGLE_MAPS_API
      }`
    );
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});
