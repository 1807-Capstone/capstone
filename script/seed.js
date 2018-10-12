'use strict';

const db = require('../server/db');
const {
  User,
  Restaurant,
  Cuisine,
  Review,
  WaitTime,
  CheckIn
} = require('../server/db/models');

async function seed() {
  await db.sync({force: true});
  console.log('db synced!');

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'tony@boetto.org', password: '123'}),
    User.create({email: 'parag.g.zaveri@gmail.com', password: '123'}),
    User.create({email: 'juliet.welcome@gmail.com', password: '123'}),
    User.create({email: 'abby.wigdale@gmail.com', password: '123'})
  ]);

  const restaurants = await Promise.all([
    Restaurant.create({
      name: 'Original Hooters',
      location: [41.8941717, -87.6345194],
      price_level: 2,
      rating: 3.9,
      yelpRating: 3.5,
      radiusRating: 3.7,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/Y3sBlOPkuAqbgqzK9O9PYw/o.jpg',
      keyword: 'american',
      vicinity: '660 N Wells St, Chicago'
    }),
    Restaurant.create({
      name: 'Underground Wonder Bar',
      location: [41.8952072, -87.6313672],
      price_level: 3,
      rating: 3.6,
      yelpRating: 4.5,
      radiusRating: 5,
      yelpImg: 'https://b.zmtcdn.com/data/pictures/1/16757421/8facfe78e85d14fb3b609fc1876d23d7.jpg',
      keyword: 'american',
      vicinity: '710 N Clark St, Chicago'
    }),
    Restaurant.create({
      name: `Lou Malnati's Pizzeria`,
      location: [41.8903425, -87.6337034],
      price_level: 2,
      rating: 4.5,
      yelpRating: 3,
      radiusRating: 3.5,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/yNwjFEaGzBBGZBWItTrDNg/o.jpg',
      keyword: 'italian',
      vicinity: '439 N Wells St, Chicago'
    }),
    Restaurant.create({
      name: `Maggiano's Little Italy`,
      location: [41.8914765, -87.6313334],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 5,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/OBFHo81arwg5qZNa4NCcGg/o.jpg',
      keyword: 'italian',
      vicinity: '516 N Clark St, Chicago'
    }),
    Restaurant.create({
      name: 'Stout Barrel House & Pizza',
      location: [41.8937555, -87.63151739999999],
      price_level: 2,
      rating: 3.9,
      yelpRating: 3,
      radiusRating: 5,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/JCtvgPFZIQ-bivzd2YKI4Q/o.jpg',
      keyword: 'american',
      vicinity: '642 N Clark St, Chicago'
    }),
    Restaurant.create({
      name: `Portillo's Hot Dogs`,
      location: [41.8934295, -87.6314147],
      price_level: 1,
      rating: 4.4,
      yelpRating: 3,
      radiusRating: 4.5,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/-9jRmNrw7QgjcUn_EXVsEA/o.jpg',
      keyword: 'american',
      vicinity: '100 W Ontario St, Chicago'
    }),
    Restaurant.create({
      name: `Farmhouse Chicago`,
      location: [41.8967165, -87.6353879],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 2.5,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/bulRW8wPO80X156odFtZdw/o.jpg',
      keyword: 'american',
      vicinity: '228 W Chicago Ave, Chicago'
    }),
    Restaurant.create({
      name: `Frontera Grill`,
      location: [41.89052059999999, -87.6308469],
      price_level: 2,
      rating: 4.4,
      radiusRating: 2.5,
      yelpRating: 3,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/Uw_hHPSPhe-V3RF0CqWJpg/o.jpg',
      keyword: 'mexican',
      vicinity: '445 N Clark St, Chicago'
    }),
    Restaurant.create({
      name: `Yolk- River North`,
      location: [41.896211, -87.633871],
      price_level: 2,
      rating: 4.4,
      yelpRating: 3.5,
      radiusRating: 4.5,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/nPpRZgOJlKciQF6KYjHMaQ/o.jpg',
      keyword: 'american',
      vicinity: '747 N Wells St, Chicago'
    }),
    Restaurant.create({
      name: `ZED451`,
      location: [41.895848, -87.631039],
      price_level: 3,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.5,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/I2dloQ4kf9Gj9E8U0unmlg/o.jpg',
      keyword: 'steakhouse',
      vicinity: '739 N Clark St, Chicago'
    }),
    Restaurant.create({
      name: `Bavette's Bar & Boeuf`,
      location: [41.8892858, -87.63494209999999],
      price_level: 3,
      rating: 4.8,
      yelpRating: 5,
      radiusRating: 4,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/umjQHAZBktNxz0LsqUyFxQ/o.jpg',
      keyword: 'american',
      vicinity: '218 W Kinzie St, Chicago'
    }),
    Restaurant.create({
      name: `Wildfire Chicago`,
      location: [41.8938449, -87.63355419999999],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4.5,
      radiusRating: 3.5,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/emuo_f3qc6qtRuRj43C2pQ/o.jpg',
      keyword: 'american',
      vicinity: '159 W Erie St, Chicago'
    }),
    Restaurant.create({
      name: `Roka Akor`,
      location: [41.890693, -87.631337],
      price_level: 3,
      rating: 4.6,
      yelpRating: 3.5,
      radiusRating: 3,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/5Y6wK7K_U7e0_mYawKbtpQ/o.jpg',
      keyword: 'japanese',
      vicinity: '456 N Clark St, Chicago'
    }),
    Restaurant.create({
      name: `Chicago Chop House`,
      location: [41.8934262, -87.63044719999999],
      price_level: 3,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 2.5,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/z7cyr3MnWlLthZV4WehX7w/o.jpg',
      keyword: 'american',
      vicinity: '60 W Ontario St, Chicago'
    }),
    Restaurant.create({
      name: `Fogo de Chão Brazilian Steakhouse`,
      location: [41.8942345, -87.6321658],
      price_level: 3,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 3,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/HCZ8ZI62X9INFxjwsQkwuQ/o.jpg',
      keyword: 'steakhouse',
      vicinity: '661 North LaSalle Street, Chicago'
    }),
    Restaurant.create({
      name: `Sunda`,
      location: [41.8909516, -87.63174339999999],
      price_level: 3,
      rating: 4.4,
      yelpRating: 4.5,
      radiusRating: 4,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/LX-3NTcM8lh8txBkqWT-vw/o.jpg',
      keyword: 'japanese',
      vicinity: '110 W Illinois St, Chicago'
    }),
    Restaurant.create({
      name: `Café Iberico`,
      location: [41.895976, -87.63235499999999],
      price_level: 2,
      rating: 4.2,
      yelpRating: 2.5,
      radiusRating: 2.5,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/IujivU0ni8kZF_0CQmIdJw/o.jpg',
      keyword: 'american',
      vicinity: '737 N LaSalle Dr, Chicago'
    }),
    Restaurant.create({
      name: `The Dawson`,
      location: [41.8913556, -87.6471969],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4.5,
      radiusRating: 4,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/3fYqzUvNUAU0xLsMHjDG-A/o.jpg',
      keyword: 'american',
      vicinity: '730 W Grand Ave, Chicago'
    }),
    Restaurant.create({
      name: `Quartino Ristorante`,
      location: [41.8934453, -87.6284081],
      price_level: 2,
      rating: 4.5,
      yelpRating: 5,
      radiusRating: 4,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/yDlBp9AHZlXfLAYoKdl5kA/o.jpg',
      keyword: 'italian',
      vicinity: '626 N State St, Chicago'
    }),
    Restaurant.create({
      name: `Brunch`,
      location: [41.89367120000001, -87.6372698],
      price_level: 2,
      rating: 4.4,
      yelpRating: 3.5,
      radiusRating: 4.5,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/Vowh8aFIMYHd4IUEZ4rxoA/o.jpg',
      keyword: 'american',
      vicinity: '644 N Orleans St, Chicago'
    }),
    Restaurant.create({
      name: `Italian Pizza Kitchen`,
      location: [41.9071295, -87.6492076],
      price_level: 2,
      rating: 3.6,
      yelpRating: 3,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/ez-ZYnR1-wfYw8GYQS8bUg/o.jpg',
      vicinity: '1433 N Dayton St, Chicago',
      keyword: 'italian'
    }),
    Restaurant.create({
      name: `Balena`,
      location: [41.912034, -87.64814899999999],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4.0,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/yP1thyrm9J_KrFjwicowXw/o.jpg',
      vicinity: '1633 N Halsted St, Chicago',
      keyword: 'italian'
    }),
    Restaurant.create({
      name: `Uncle Julio's Mexican From Scratch`,
      location: [41.9105925, -87.65044879999999],
      price_level: 2,
      rating: 4.1,
      yelpRating: 3,
      radiusRating: 3.7,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/ME4g9BMtVcF2z0k9-fXkKA/o.jpg',
      vicinity: '855 W North Ave, Chicago',
      keyword: 'mexican'
    }),
    Restaurant.create({
      name: `MingHin Cuisine`,
      location: [41.8532741, -87.6348355],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 4.1,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/tJlRSuteEdJKN8l4Nm_sxQ/o.jpg',
      vicinity: '2168 S Archer Ave, Chicago',
      keyword: 'chinese'
    }),
    Restaurant.create({
      name: `Imperial Lamian`,
      location: [41.8902808, -87.6282426],
      price_level: 2,
      rating: 4.2,
      yelpRating: 4.0,
      radiusRating: 4.0,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/k09eWO2tUo04V_z_N_z39g/o.jpg',
      vicinity: '6 W Hubbard St, Chicago',
      keyword: 'chinese'
    }),
    Restaurant.create({
      name: `Sun Wah BBQ`,
      location: [41.97395969999999, -87.6596036],
      price_level: 1,
      rating: 4.3,
      yelpRating: 4,
      radiusRating: 4.5,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/e8BxB_y9zUXKh4qkMNhCQw/o.jpg',
      vicinity: '5039 N Broadway, Chicago',
      keyword: 'chinese'
    }),
    Restaurant.create({
      name: `Duck Duck Goat`,
      location: [41.8866386, -87.64967399999999],
      price_level: 3,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/B-9g9Mgdy6TCJv7NeRgwFA/o.jpg',
      vicinity: '857 W Fulton Market, Chicago',
      keyword: 'chinese'
    }),
    Restaurant.create({
      name: `Shanghai Terrace`,
      location: [41.8959851, -87.6250761],
      price_level: 4,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.6,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/JOlRFaeEu5NYCdNdcQ7kGg/o.jpg',
      vicinity: '108 E Superior St, Chicago',
      keyword: 'chinese'
    }),
    Restaurant.create({
      name: `Panda Express`,
      location: [41.884921, -87.62312010000001],
      price_level: 1,
      rating: 4,
      yelpRating: 3,
      radiusRating: 3.0,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/vk4YU5tSE73rjgGZnOU-qw/o.jpg',
      phone: '+13129461670',
      vicinity: '130 E Randolph St, Chicago',
      keyword: 'chinese'
    }),
    Restaurant.create({
      name: `Lao Sze Chuan`,
      location: [41.891482, -87.62453699999999],
      price_level: 2,
      rating: 3.7,
      yelpRating: 3.5,
      radiusRating: 3.4,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/LPxmTV3aPBNS5QIMpr4NyA/o.jpg',
      vicinity: '520 Michigan Avenue, Chicago',
      keyword: 'chinese'
    }),
    Restaurant.create({
      name: `Great Sea Restaurant`,
      location: [41.968573, -87.710644],
      price_level: 2,
      rating: 4.3,
      yelpRating: 4,
      radiusRating: 4.0,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/ApZiS9jrehm-9aEIrz2_Aw/o.jpg',
      vicinity: '3254 W Lawrence Ave, Chicago',
      keyword: 'chinese'
    }),
    Restaurant.create({
      name: `Chi Cafe`,
      location: [41.853511, -87.634486],
      price_level: 1,
      rating: 4.3,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/emRl7rHf8Pk1C4UZymM6YA/o.jpg',
      vicinity: '2160 S Archer Ave, Chicago',
      keyword: 'chinese'
    }),
    Restaurant.create({
      name: `Burger Bar Chicago`,
      location: [41.8678473, -87.6244181],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4.0,
      radiusRating: 4.0,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/oAmkSYqGuiMXwMQGUsXvmQ/o.jpg',
      vicinity: '1150 S Michigan Ave, Chicago',
      keyword: 'burgers'
    }),
    Restaurant.create({
      name: `Umami Burger Wicker Park`,
      location: [41.9087226, -87.6751027],
      price_level: 2,
      rating: 4.2,
      yelpRating: 4,
      radiusRating: 4.4,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/_5iDnD0lZagzQpVYvTzyHw/o.jpg',
      vicinity: '1480 N Milwaukee Ave, Chicago',
      keyword: 'burgers'
    }),
    Restaurant.create({
      name: `DMK Burger Bar`,
      location: [41.9087226, -87.6751027],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 4.4,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/AzWtjNcIFXyX2FVHb0hd9g/o.jpg',
      vicinity: '2954 N Sheffield Ave, Chicago',
      keyword: 'burgers'
    }),
    Restaurant.create({
      name: `Epic Burger`,
      location: [41.8895468, -87.6308718],
      price_level: 1,
      rating: 4.1,
      yelpRating: 4,
      radiusRating: 3.5,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/xB3ClMiVINpje2RMzXVSQQ/o.jpg',
      vicinity: '407 N Clark St, Chicago',
      keyword: 'burgers'
    }),
    Restaurant.create({
      name: `M Burger`,
      location: [41.89310520000001, -87.6285585],
      price_level: 1,
      rating: 4.1,
      yelpRating: 3.5,
      radiusRating: 3.9,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/J1_F82AT_hZl92G13UTbCw/o.jpg',
      vicinity: '5 W Ontario St, Chicago',
      keyword: 'burgers'
    }),
    Restaurant.create({
      name: `Butcher & The Burger`,
      location: [41.9179045, -87.65431410000001],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/I5MsaZgyzJPuvxssv0VvxQ/o.jpg',
      vicinity: '1021 W Armitage Ave, Chicago',
      keyword: 'burgers'
    }),
    Restaurant.create({
      name: `Ambassador Chicago`,
      location: [41.9059674, -87.6283026],
      price_level: 2,
      rating: 4.2,
      yelpRating: 3.5,
      radiusRating: 4.0,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/TtnpcILW2W5_VGu5CH3F5Q/o.jpg',
      vicinity: '1301 North State Parkway, Chicago',
      keyword: 'american'
    }),
    Restaurant.create({
      name: `Fairmont Chicago Millennium Park`,
      location: [41.88602940000001, -87.62117049999999],
      price_level: 3,
      rating: 4.4,
      yelpRating: 3.5,
      radiusRating: 4.1,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/mLFTsWWDb0GV_3R6fv8jOA/o.jpg',
      vicinity: '200 North Columbus Drive, Chicago',
      keyword: 'american'
    }),
    Restaurant.create({
      name: `Girl & The Goat`,
      location: [41.8841731, -87.6479548],
      price_level: 3,
      rating: 4.7,
      yelpRating: 4.2,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/ya6gjD4BPlxe7AKMj_5WsA/o.jpg',
      vicinity: '809 West Randolph Street, Chicago',
      keyword: 'american'
    }),
    Restaurant.create({
      name: `Lucky Strike`,
      location: [41.8914021, -87.6195235],
      price_level: 3,
      rating: 4.1,
      yelpRating: 4.5,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/I5MsaZgyzJPuvxssv0VvxQ/o.jpg',
      vicinity: '322 East Illinois Street, Chicago',
      keyword: 'american'
    }),
    Restaurant.create({
      name: `Bella Bacinos`,
      location: [41.8876183, -87.6256375],
      price_level: 2,
      rating: 3.9,
      yelpRating: 3.5,
      radiusRating: 3.8,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/PKqL-p3k9UrCE8ysn0naLg/o.jpg',
      vicinity: '75 East Upper Wacker Drive, Chicago',
      keyword: 'italian'
    }),
    Restaurant.create({
      name: `Native Foods Cafe`,
      location: [41.8788971, -87.6309826],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/I9c8qSF1b8AVo7qgzTnHZg/o.jpg',
      vicinity: '218 South Clark Street, Chicago',
      keyword: 'american'
    }),
    Restaurant.create({
      name: `The Grillroom Chophouse & Wine Bar`,
      location: [41.8805263, -87.628597],
      price_level: 3,
      rating: 4.4,
      yelpRating: 3,
      radiusRating: 4.0,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/XG9HpwfocolnUiUGBPKkFg/o.jpg',
      vicinity: '33 West Monroe Street, Chicago',
      keyword: 'steakhouse'
    }),
    Restaurant.create({
      name: `Primebar`,
      location: [41.88494110000001, -87.63668009999999],
      price_level: 2,
      rating: 4.1,
      yelpRating: 3.5,
      radiusRating: 3.9,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/v85kkVI3Kk_AEL2SjuC8aw/o.jpg',
      vicinity: '155 North Upper Wacker Drive, Chicago',
      keyword: 'american'
    }),
    Restaurant.create({
      name: `Smith & Wollensky - Chicago`,
      location: [41.88798870000001, -87.62860599999999],
      price_level: 3,
      rating: 4.4,
      yelpRating: 3.5,
      radiusRating: 3.6,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/kNIukQlcFiWQReVZYspJ5g/o.jpg',
      vicinity: '318 North State Street, Chicago',
      keyword: 'steakhouse'
    }),
    Restaurant.create({
      name: `Bandera`,
      location: [41.89195879999999, -87.6235214],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.6,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/zYlaZ78v4DZbeDKPB4xGkQ/o.jpg',
      vicinity: '535 North Michigan Avenue, Chicago',
      keyword: 'american'
    }),
    Restaurant.create({
      name: `Las Tablas`,
      location: [41.89195879999999, -87.6235214],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.1,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/zYlaZ78v4DZbeDKPB4xGkQ/o.jpg',
      vicinity: '2942 North Lincoln Avenue, Chicago',
      keyword: 'steakhouse'
    }),
    Restaurant.create({
      name: `Elephant & Castle`,
      location: [41.8792499, -87.6313018],
      price_level: 2,
      rating: 4.2,
      yelpRating: 3.5,
      radiusRating: 4.1,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/QsFPLnqFO1g9ymn-_7-LyQ/o.jpg',
      vicinity: '111 West Adams Street, Chicago',
      keyword: 'american'
    }),
    Restaurant.create({
      name: `Giordano's`,
      location: [41.8959933, -87.6256958],
      price_level: 2,
      rating: 4.3,
      yelpRating: 4.2,
      radiusRating: 4.5,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/I5MsaZgyzJPuvxssv0VvxQ/o.jpg',
      vicinity: '730 North Rush Street, Chicago',
      keyword: 'italian'
    }),
    Restaurant.create({
      name: `Siena Tavern`,
      location: [41.889043, -87.630156],
      price_level: 3,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.4,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/gitShUDIV5KZNPEWFo6s2w/o.jpg',
      vicinity: '51 West Kinzie Street, Chicago',
      keyword: 'italian'
    }),
    Restaurant.create({
      name: `Gino's East`,
      location: [41.89601589999999, -87.623026],
      price_level: 2,
      rating: 4.3,
      yelpRating: 3.5,
      radiusRating: 3.7,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/Acr3uH-B0negy-jR4CIqhA/o.jpg',
      vicinity: '162 East Superior Street, Chicago',
      keyword: 'italian'
    }),
    Restaurant.create({
      name: `Duffy's Tavern and Grille`,
      location: [41.9329916, -87.6404574],
      price_level: 1,
      rating: 4,
      yelpRating: 3,
      radiusRating: 3.9,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/Et0sJRN4-ryoyfjhf-3aow/o.jpg',
      vicinity: '420 West Diversey Parkway, Chicago',
      keyword: 'american'
    }),
    Restaurant.create({
      name: `McCormick & Schmick's Seafood & Steaks`,
      location: [41.8866025, -87.62722529999999],
      price_level: 3,
      rating: 4.1,
      yelpRating: 3,
      radiusRating: 3,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/2WwXys5CuBKXKTEFqUVjRw/o.jpg',
      vicinity: '1 East Upper Wacker Drive, Chicago',
      keyword: 'steakhouse'
    })
  ]);

  console.log(`seeded ${restaurants.length} restaurants`);
  console.log(`seeded ${users.length} users`);

  const cuisines = await Promise.all([
    Cuisine.create({name: 'american'}),
    Cuisine.create({name: 'italian'}),
    Cuisine.create({name: 'chinese'}),
    Cuisine.create({name: 'mexican'}),
    Cuisine.create({name: 'japanese'}),
    Cuisine.create({name: 'burgers'}),
    Cuisine.create({name: 'steakhouse'})
  ]);

  console.log(`seeded ${cuisines.length} cuisines`);

  const reviews = await Promise.all([
    Review.create({
      rating: 5,
      content:
        'Lorem ipsum dolor sit amet, erant ubique posidonium ei pri, his tempor epicurei in. Te doctus ornatus est. Oratio pertinax suavitate vis ne.',
      userId: 1,
      restaurantId: 1
    }),
    Review.create({
      rating: 3,
      content:
        'Eu vidisse prompta complectitur eum, est oportere adolescens at.',
      userId: 2,
      restaurantId: 1
    }),
    Review.create({
      rating: 4,
      content:
        'Pro regione phaedrum tacimates an, ferri elaboraret no est, mei ex primis integre posidonium.',
      userId: 2,
      restaurantId: 2
    }),
    Review.create({
      rating: 5,
      content:
        'Quo duis repudiandae et, ferri suscipit sit an. Cu ius semper inermis, ne diceret luptatum convenire pri.',
      userId: 1,
      restaurantId: 2
    }),
    Review.create({
      rating: 2,
      content:
        'Ad commodo nonumes scriptorem mea, veri malis aliquip qui ad, accusata consectetuer sit et.',
      userId: 1,
      restaurantId: 3
    }),
    Review.create({
      rating: 3,
      content:
        'Ea mea mundi salutandi consulatu, ius id eius mandamus, cu est petentium dissentias.',
      userId: 2,
      restaurantId: 3
    }),
    Review.create({
      rating: 5,
      content: 'Esse zril mandamus cum at, euismod definitionem vis ad.',
      userId: 1,
      restaurantId: 4
    }),
    Review.create({
      rating: 5,
      content:
        'Discere consectetuer vim ut. Fugit facilisis duo ne, ad prompta diceret referrentur nec.',
      userId: 1,
      restaurantId: 4
    }),
    Review.create({
      rating: 3,
      content:
        'Euismod omnesque mandamus in qui, vidit homero ex eos. Nemore iisque usu eu, ius vitae indoctum aliquando te.',
      userId: 1,
      restaurantId: 5
    }),
    Review.create({
      rating: 4,
      content:
        'Alterum nonumes id eum, accusata mediocritatem ut sed. Mea ne recteque assueverit, tractatos repudiandae ea quo.',
      userId: 1,
      restaurantId: 5
    }),
    Review.create({
      rating: 4,
      content:
        'Alterum nonumes id eum, accusata mediocritatem ut sed. Mea ne recteque assueverit, tractatos repudiandae ea quo.',
      userId: 1,
      restaurantId: 5
    }),
    Review.create({
      rating: 5,
      content:
        'Alterum nonumes id eum, accusata mediocritatem ut sed. Mea ne recteque assueverit, tractatos repudiandae ea quo.',
      userId: 2,
      restaurantId: 5
    }),
    Review.create({
      rating: 3,
      content:
        'Alterum nonumes id eum, accusata mediocritatem ut sed. Mea ne recteque assueverit, tractatos repudiandae ea quo.',
      userId: 1,
      restaurantId: 6
    }),
    Review.create({
      rating: 5,
      content:
        'Alterum nonumes id eum, accusata mediocritatem ut sed. Mea ne recteque assueverit, tractatos repudiandae ea quo.',
      userId: 2,
      restaurantId: 7
    }),
    Review.create({
      rating: 2,
      content:
        'Alterum nonumes id eum, accusata mediocritatem ut sed. Mea ne recteque assueverit, tractatos repudiandae ea quo.',
      userId: 2,
      restaurantId: 8
    })
  ]);

  console.log(`seeded ${reviews.length} reviews`);

  const waitTimes = await Promise.all([
    WaitTime.create({
      time: 0,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
    })
  ]);
  console.log(`seeded ${waitTimes.length} check ins`);

  console.log(`seeded successfully`);

  const checkIns = await Promise.all([
    CheckIn.create({
      userId: 1,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 4
    })
  ]);
  console.log(`seeded ${checkIns.length} wait times`);

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
