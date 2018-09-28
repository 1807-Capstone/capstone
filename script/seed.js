'use strict'

const db = require('../server/db')
const {User, Restaurant} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const restaurants = [
    {
      name: 'Original Hooters',
      location: [41.8941717, -87.6345194],
      price: 2,
      googleRating: 3.9
    },
    {
      name: 'Underground Wonder Bar',
      location: [41.8952072, -87.6313672],
      price: 3,
      googleRating: 3.6
    },
    {
      name: `Lou Malnati's Pizzeria`,
      location: [41.8903425, -87.6337034],
      price: 2,
      googleRating: 4.5
    },
    {
      name: `Maggiano's Little Italy`,
      location: [41.8914765, -87.6313334],
      price: 2,
      googleRating: 4.4
    }
  ]

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
