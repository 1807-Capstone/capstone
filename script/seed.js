'use strict'

const db = require('../server/db')
const {
  User,
  Restaurant,
  Cuisine,
  Review,
  WaitTime
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const restaurants = await Promise.all([
    Restaurant.create({
      name: 'Original Hooters',
      // location: [41.8941717, -87.6345194],
      price: 2,
      googleRating: 3.9
    }),
    Restaurant.create({
      name: 'Underground Wonder Bar',
      // location: [41.8952072, -87.6313672],
      price: 3,
      googleRating: 3.6
    }),
    Restaurant.create({
      name: `Lou Malnati's Pizzeria`,
      // location: [41.8903425, -87.6337034],
      price: 2,
      googleRating: 4.5
    }),
    Restaurant.create({
      name: `Maggiano's Little Italy`,
      // location: [41.8914765, -87.6313334],
      price: 2,
      googleRating: 4.4
    }),
    Restaurant.create({
      name: 'Stout Barrel House & Pizza',
      // location: [41.8937555, -87.63151739999999],
      price: 2,
      googleRating: 3.9
    }),
    Restaurant.create({
      name: `Portillo's Hot Dogs`,
      // location: [41.8934295, -87.6314147],
      price: 1,
      googleRating: 4.4
    }),
    Restaurant.create({
      name: `Farmhouse Chicago`,
      // location: [41.8967165, -87.6353879],
      price: 2,
      googleRating: 4.4
    }),
    Restaurant.create({
      name: `Frontera Grill`,
      // location: [41.89052059999999, -87.6308469],
      price: 2,
      googleRating: 4.4
    }),
    Restaurant.create({
      name: `Yolk- River North`,
      // location: [41.896211, -87.633871],
      price: 2,
      googleRating: 4.4
    }),
    Restaurant.create({
      name: `ZED451`,
      // location: [41.895848, -87.631039],
      price: 3,
      googleRating: 4.5
    }),
    Restaurant.create({
      name: `Bavette's Bar & Boeuf`,
      // location: [41.8892858, -87.63494209999999],
      price: 3,
      googleRating: 4.8
    }),
    Restaurant.create({
      name: `Wildfire Chicago`,
      // location: [41.8938449, -87.63355419999999],
      price: 2,
      googleRating: 4.4
    }),
    Restaurant.create({
      name: `Roka Akor`,
      // location: [41.890693, -87.631337],
      price: 3,
      googleRating: 4.6
    }),
    Restaurant.create({
      name: `Chicago Chop House`,
      // location: [41.8934262, -87.63044719999999],
      price: 3,
      googleRating: 4.4
    }),
    Restaurant.create({
      name: `Fogo de Chão Brazilian Steackhouse`,
      // location: [41.8942345, -87.6321658],
      price: 3,
      googleRating: 4.6
    }),
    Restaurant.create({
      name: `Sunda`,
      // location: [41.8909516, -87.63174339999999],
      price: 3,
      googleRating: 4.4
    }),
    Restaurant.create({
      name: `Café Iberico`,
      // location: [41.895976, -87.63235499999999],
      price: 2,
      googleRating: 4.2
    }),
    Restaurant.create({
      name: `The Dawson`,
      // location: [41.8913556, -87.6471969],
      price: 2,
      googleRating: 4.4
    }),
    Restaurant.create({
      name: `Quartino Ristorante`,
      // location: [41.8934453, -87.6284081],
      price: 2,
      googleRating: 4.5
    }),
    Restaurant.create({
      name: `Brunch`,
      // location: [41.89367120000001, -87.6372698],
      price: 2,
      googleRating: 4.4
    })
  ])

  console.log(`seeded ${users.length} users`)

  const cuisines = await Promise.all([
    Cuisine.create({name: 'American'}),
    Cuisine.create({name: 'Italian'}),
    Cuisine.create({name: 'Chinese'}),
    Cuisine.create({name: 'Indian'}),
    Cuisine.create({name: 'Mexican'}),
    Cuisine.create({name: 'French'}),
    Cuisine.create({name: 'Japanese'}),
    Cuisine.create({name: 'Thai'}),
    Cuisine.create({name: 'Greek'}),
    Cuisine.create({name: 'Vegetarian'})
  ])

  console.log(`seeded ${cuisines.length} cuisines`)

  // const reviews = await Promise.all([
  //   Review.create({
  //     rating: 5,
  //     content:
  //       'Lorem ipsum dolor sit amet, erant ubique posidonium ei pri, his tempor epicurei in. Te doctus ornatus est. Oratio pertinax suavitate vis ne.',
  //     userId: 1,
  //     restaurantId: 1
  //   }),
  //   Review.create({
  //     rating: 3,
  //     content:
  //       'Eu vidisse prompta complectitur eum, est oportere adolescens at.',
  //     userId: 2,
  //     restaurantId: 1
  //   }),
  //   Review.create({
  //     rating: 4,
  //     content:
  //       'Pro regione phaedrum tacimates an, ferri elaboraret no est, mei ex primis integre posidonium.',
  //     userId: 2,
  //     restaurantId: 2
  //   }),
  //   Review.create({
  //     rating: 5,
  //     content:
  //       'Quo duis repudiandae et, ferri suscipit sit an. Cu ius semper inermis, ne diceret luptatum convenire pri.',
  //     userId: 1,
  //     restaurantId: 2
  //   }),
  //   Review.create({
  //     rating: 2,
  //     content:
  //       'Ad commodo nonumes scriptorem mea, veri malis aliquip qui ad, accusata consectetuer sit et.',
  //     userId: 1,
  //     restaurantId: 3
  //   }),
  //   Review.create({
  //     rating: 3,
  //     content:
  //       'Ea mea mundi salutandi consulatu, ius id eius mandamus, cu est petentium dissentias.',
  //     userId: 2,
  //     restaurantId: 3
  //   }),
  //   Review.create({
  //     rating: 5,
  //     content: 'Esse zril mandamus cum at, euismod definitionem vis ad.',
  //     userId: 1,
  //     restaurantId: 4
  //   }),
  //   Review.create({
  //     rating: 5,
  //     content:
  //       'Discere consectetuer vim ut. Fugit facilisis duo ne, ad prompta diceret referrentur nec.',
  //     userId: 1,
  //     restaurantId: 4
  //   }),
  //   Review.create({
  //     rating: 3,
  //     content:
  //       'Euismod omnesque mandamus in qui, vidit homero ex eos. Nemore iisque usu eu, ius vitae indoctum aliquando te.',
  //     userId: 1,
  //     restaurantId: 5
  //   }),
  //   Review.create({
  //     rating: 4,
  //     content:
  //       'Alterum nonumes id eum, accusata mediocritatem ut sed. Mea ne recteque assueverit, tractatos repudiandae ea quo.',
  //     userId: 1,
  //     restaurantId: 5
  //   })
  // ])

  // console.log(`seeded ${reviews.length} reviews`)

  // const waitTimes = await Promise.all([
  //   WaitTime.create({
  //     name: 'Under 15 minutes',
  //     restaurantId: 1
  //   }),
  //   WaitTime.create({
  //     name: 'Under 15 minutes',
  //     restaurantId: 1
  //   }),
  //   WaitTime.create({
  //     name: 'Under 15 minutes',
  //     restaurantId: 5
  //   }),
  //   WaitTime.create({
  //     name: 'Under 15 minutes',
  //     restaurantId: 6
  //   }),
  //   WaitTime.create({
  //     name: 'Under 15 minutes',
  //     restaurantId: 17
  //   }),
  //   WaitTime.create({
  //     name: '15-30 minutes',
  //     restaurantId: 1
  //   }),
  //   WaitTime.create({
  //     name: '15-30 minutes',
  //     restaurantId: 2
  //   }),
  //   WaitTime.create({
  //     name: '15-30 minutes',
  //     restaurantId: 14
  //   }),
  //   WaitTime.create({
  //     name: '15-30 minutes',
  //     restaurantId: 10
  //   }),
  //   WaitTime.create({
  //     name: '15-30 minutes',
  //     restaurantId: 2
  //   }),
  //   WaitTime.create({
  //     name: '30-60 minutes',
  //     restaurantId: 1
  //   }),
  //   WaitTime.create({
  //     name: '30-60 minutes',
  //     restaurantId: 4
  //   }),
  //   WaitTime.create({
  //     name: '30-60 minutes',
  //     restaurantId: 14
  //   }),
  //   WaitTime.create({
  //     name: '30-60 minutes',
  //     restaurantId: 2
  //   }),
  //   WaitTime.create({
  //     name: 'Over 60 minutes',
  //     restaurantId: 15
  //   }),
  //   WaitTime.create({
  //     name: 'Over 60 minutes',
  //     restaurantId: 15
  //   }),
  //   WaitTime.create({
  //     name: 'Over 60 minutes',
  //     restaurantId: 12
  //   }),
  //   WaitTime.create({
  //     name: 'Over 60 minutes',
  //     restaurantId: 14
  //   })
  // ])

  // console.log(`seeded ${waitTimes.length} wait times`)

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
