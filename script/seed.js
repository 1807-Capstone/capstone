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
    },
    {
      name: 'Stout Barrel House & Pizza',
      location: [41.8937555, -87.63151739999999],
      price: 2,
      googleRating: 3.9
    },
    {
      name: `Portillo's Hot Dogs`,
      location: [41.8934295, -87.6314147],
      price: 1,
      googleRating: 4.4
    },
    {
      name: `Farmhouse Chicago`,
      location: [41.8967165, -87.6353879],
      price: 2,
      googleRating: 4.4
    },
    {
      name: `Frontera Grill`,
      location: [41.89052059999999, -87.6308469],
      price: 2,
      googleRating: 4.4
    },
    {
      name: `Yolk- River North`,
      location: [41.896211, -87.633871],
      price: 2,
      googleRating: 4.4
    },
    {
      name: `ZED451`,
      location: [41.895848, -87.631039],
      price: 3,
      googleRating: 4.5
    },
    {
      name: `Bavette's Bar & Boeuf`,
      location: [41.8892858, -87.63494209999999],
      price: 3,
      googleRating: 4.8
    },
    {
      name: `Wildfire Chicago`,
      location: [41.8938449, -87.63355419999999],
      price: 2,
      googleRating: 4.4
    },
    {
      name: `Roka Akor`,
      location: [41.890693, -87.631337],
      price: 3,
      googleRating: 4.6
    },
    {
      name: `Chicago Chop House`,
      location: [41.8934262, -87.63044719999999],
      price: 3,
      googleRating: 4.4
    },
    {
      name: `Fogo de Chão Brazilian Steackhouse`,
      location: [41.8942345, -87.6321658],
      price: 3,
      googleRating: 4.6
    },
    {
      name: `Sunda`,
      location: [41.8909516, -87.63174339999999],
      price: 3,
      googleRating: 4.4
    },
    {
      name: `Café Iberico`,
      location: [41.895976, -87.63235499999999],
      price: 2,
      googleRating: 4.2
    },
    {
      name: `The Dawson`,
      location: [41.8913556, -87.6471969],
      price: 2,
      googleRating: 4.4
    },
    {
      name: `Quartino Ristorante`,
      location: [41.8934453, -87.6284081],
      price: 2,
      googleRating: 4.5
    },
    {
      name: `Brunch`,
      location: [41.89367120000001, -87.6372698],
      price: 2,
      googleRating: 4.4
    }
  ]

  restaurants.map(async restaurant => {
    await Restaurant.create(restaurant)
  })

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
