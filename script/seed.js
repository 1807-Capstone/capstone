'use strict';

const db = require('../server/db');
const {
  User,
  Restaurant,
  Review,
  WaitTime,
  CheckIn
} = require('../server/db/models');

const restaurantSeeds = require('./restaurants.json');
const reviewSeeds = require('./reviews.json');
const userSeeds = require('./users.json');
const checkInSeeds = require('./checkins.json');
const waitTimeSeeds = require('./waitTimes.json');

async function seed() {
  await db.sync({force: true});
  console.log('db synced!');
  const users = await User.bulkCreate(userSeeds, {individualHooks: true});
  const restaurants = await Restaurant.bulkCreate(restaurantSeeds);
  const reviews = await Review.bulkCreate(reviewSeeds);
  const waittimes = await WaitTime.bulkCreate(waitTimeSeeds);
  const checkIns = await CheckIn.bulkCreate(checkInSeeds);
  await db.query(`ALTER SEQUENCE "users_id_seq" RESTART WITH 29;`);
  await db.query(`ALTER SEQUENCE "restaurants_id_seq" RESTART WITH 161;`);
  await db.query(`ALTER SEQUENCE "check-ins_id_seq" RESTART WITH 2241;`);
  await db.query(`ALTER SEQUENCE "reviews_id_seq" RESTART WITH 16;`);
  await db.query(`ALTER SEQUENCE "waitTimes_id_seq" RESTART WITH 6021;`);
  console.log('seeded 28 users');
  console.log('seeded 161 restaurants');
  console.log('seeded 16 reviews');
  console.log('seeded 6020 wait times');
  console.log('seeded 2240 check ins');

  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
