const router = require('express').Router();
const {User, CheckIn} = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.id);
    if (req.user === currentUser) {
      res.json(currentUser);
    }
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const userToUpdate = await User.findOne({
      where: {id: req.params.id}
    });
    const updatedUser = await userToUpdate.update(
      {
        didCheckIn: true
      },
      {returning: true}
    );
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

router.post('/:id/checkIns', async (req, res, next) => {
  try {
    const newCheckIn = await CheckIn.create({
      userId: req.body.userId,
      restaurantId: req.body.restaurantId
    });
    res.json(newCheckIn);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/suggested', async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.id);
    let suggestedRestaurants = await currentUser.getSuggested();
    res.status(200).json(suggestedRestaurants);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/visited', async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.params.id);
    let visitedRestaurants = await currentUser.getVisited();
    res.status(200).json(visitedRestaurants);
  } catch (err) {
    next(err);
  }
});
