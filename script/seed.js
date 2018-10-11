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
    User.create({email: 'abby.wigdale@gmail.com', password: '123'}),
    User.create({email: 'billybob2@gmail.com', password: '123'}),
    User.create({email: 'tonester@email.com', password: '123'}),
    User.create({email: 'sillyfella@gmail.com', password: '123'}),
    User.create({email: 'testerfella@gmail.com', password: '123'}),
    User.create({email: 'testaccount@gmail.com', password: '123'}),
    User.create({email: 'anewaccount@gmail.com', password: '123'}),
    User.create({email: 'anewHope@gmail.com', password: '123'}),
    User.create({email: 'baronharkonnen@gmail.com', password: '123'}),
    User.create({email: 'anewFight@gmail.com', password: '123'}),
    User.create({email: 'nextchecking@gmail.com', password: '123'}),
    User.create({email: 'test@gmail.com', password: '123'}),
    User.create({email: 'testnewfacee@gmail.com', password: '123'}),
    User.create({email: 'test2342@gmail.com', password: '123'}),
    User.create({email: 'anewseresffes@gmail.com', password: '123'}),
    User.create({email: 'testaccount22@gmail.com', password: '123'}),
    User.create({email: 'anewmatrix@timestamp.com', password: '123'}),
    User.create({email: 'letskeepseeding@gmail.com', password: '123'}),
    User.create({email: 'newewfweufe@gmail.com', password: '123'}),
    User.create({email: 'feiujifjerejrr@nrec.com', password: '123'}),
    User.create({email: 'paulatreides@gmail.com', password: '123'}),
    User.create({email: 'muaddib@tony.com', password: '123'}),
    User.create({email: 'testarooonster@test.com', password: '123'})
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
      yelpImg:
        'https://b.zmtcdn.com/data/pictures/1/16757421/8facfe78e85d14fb3b609fc1876d23d7.jpg',
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
    }),
    Restaurant.create({
      name: 'Los Portales Mexican Restaurant',
      location: [42.0080956, -87.6667577],
      price_level: 1,
      rating: 4.2,
      yelpRating: 3,
      radiusRating: 3.6,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/TcR6HpRk9gNVhr9ZqlJ2xQ/o.jpg',
      keyword: null,
      vicinity: '1418 West Morse Avenue'
    }),
    Restaurant.create({
      name: 'Heartland Cafe',
      location: [42.0092743, -87.6663797],
      price_level: 2,
      rating: 4.2,
      yelpRating: 3,
      radiusRating: 3.6,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/sdf8kyQGWwkOB35tCfLhjA/o.jpg',
      keyword: null,
      vicinity: '7000 North Glenwood Avenue'
    }),
    Restaurant.create({
      name: 'Tahoora Sweets & Bakery',
      location: [41.997485, -87.68927],
      price_level: 2,
      rating: 4.2,
      yelpRating: 3.5,
      radiusRating: 3.85,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/X1WGZ5T8m0HkHJl2DhcRWQ/o.jpg',
      keyword: null,
      vicinity: '2345 West Devon Avenue'
    }),
    Restaurant.create({
      name: 'Sabri Nihari Restaurant',
      location: [41.9978153, -87.6925613],
      price_level: 2,
      rating: 4.1,
      yelpRating: 3.5,
      radiusRating: 3.8,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/dBuvm_xhxG6zxUcxJsYwDw/o.jpg',
      keyword: null,
      vicinity: '1970'
    }),
    Restaurant.create({
      name: 'Ghareeb Nawaz Restaurant',
      location: [41.9980708, -87.6815765],
      price_level: 1,
      rating: 4.1,
      yelpRating: 4,
      radiusRating: 4.05,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/WZ3RP3XYLbiLz32Sty-7Ag/o.jpg',
      keyword: null,
      vicinity: '2032 West Devon Avenue'
    }),
    Restaurant.create({
      name: 'San Soo Gab San',
      location: [41.977527, -87.688737],
      price_level: 2,
      rating: 3.8,
      yelpRating: 3.5,
      radiusRating: 3.65,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/_dVuql6f6kYYFUckVrl96A/o.jpg',
      keyword: null,
      vicinity: '5247 North Western Avenue'
    }),
    Restaurant.create({
      name: 'Pueblito Viejo',
      location: [41.9804124, -87.692503],
      price_level: 2,
      rating: 4.3,
      yelpRating: 3.5,
      radiusRating: 3.9,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/-r4xqox2i2JuNESVrwPRPg/o.jpg',
      keyword: null,
      vicinity: '5429 North Lincoln Avenue'
    }),
    Restaurant.create({
      name: 'Jibek Jolu',
      location: [41.9731882, -87.6912697],
      price_level: 2,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/wkWltRo1JaBS4DXWtDp64Q/o.jpg',
      keyword: null,
      vicinity: '5047 North Lincoln Avenue'
    }),
    Restaurant.create({
      name: 'Over Easy Café',
      location: [41.971818, -87.679138],
      price_level: 2,
      rating: 4.7,
      yelpRating: 4.5,
      radiusRating: 4.6,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/TYaCoftc_iCJXfiUyRMPQQ/o.jpg',
      keyword: null,
      vicinity: '4943 North Damen Avenue'
    }),
    Restaurant.create({
      name: 'The Bongo Room',
      location: [41.9731796, -87.6683478],
      price_level: 2,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/sXh2yw2w2l4dcTzoXZ95DA/o.jpg',
      keyword: null,
      vicinity: '5022 North Clark Street'
    }),
    Restaurant.create({
      name: 'Fat Rice',
      location: [41.9319416, -87.7023701],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/qbIhsnJztgtmabvxQW46jw/o.jpg',
      keyword: null,
      vicinity: '2957 West Diversey Avenue'
    }),
    Restaurant.create({
      name: 'The Chicago Diner, Logan Square',
      location: [41.9237, -87.698444],
      price_level: 2,
      rating: 4.7,
      yelpRating: 4.5,
      radiusRating: 4.6,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/J67tHzydLXAe50f6dvS_RQ/o.jpg',
      keyword: null,
      vicinity: '2333 North Milwaukee Avenue'
    }),
    Restaurant.create({
      name: 'The Rocking Horse',
      location: [41.927503, -87.704527],
      price_level: 1,
      rating: 4.2,
      yelpRating: 3.5,
      radiusRating: 3.85,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/boyFHzzf8P_o0NkHjEKR_w/o.jpg',
      keyword: null,
      vicinity: '2535 North Milwaukee Avenue'
    }),
    Restaurant.create({
      name: 'Candlelite Chicago',
      location: [42.01746, -87.6905592],
      price_level: 2,
      rating: 4.3,
      yelpRating: null,
      radiusRating: 4.3,
      yelpImg: null,
      keyword: null,
      vicinity: '1734'
    }),
    Restaurant.create({
      name: 'Restaurante Cuetzala Gro',
      location: [42.015525, -87.675356],
      price_level: 1,
      rating: 4.7,
      yelpRating: 4.5,
      radiusRating: 4.6,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/jM-JdUQgnJDxV2_EpwgPBw/o.jpg',
      keyword: null,
      vicinity: '7360 North Clark Street'
    }),
    Restaurant.create({
      name: 'Nueva Italy Pizzeria',
      location: [42.0116809, -87.6742672],
      price_level: 2,
      rating: 4.2,
      yelpRating: 4,
      radiusRating: 4.1,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/gkdzpNS5RdP6RyRm3vPPog/o.jpg',
      keyword: null,
      vicinity: '2407'
    }),
    Restaurant.create({
      name: 'Little Caesars Pizza',
      location: [42.0091908, -87.6735726],
      price_level: 1,
      rating: 3.9,
      yelpRating: 3.5,
      radiusRating: 3.7,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/UFxKp1vaGv1C-OTIRRmHiw/o.jpg',
      keyword: null,
      vicinity: '7001 North Clark Street'
    }),
    Restaurant.create({
      name: 'Taste of Peru',
      location: [42.0013232, -87.6712749],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/wtl2fpBqBynSpFZ6zn0HNw/o.jpg',
      keyword: null,
      vicinity: '6545 North Clark Street'
    }),
    Restaurant.create({
      name: 'Firehouse Grill',
      location: [42.03203, -87.679215],
      price_level: 2,
      rating: 3.9,
      yelpRating: 3,
      radiusRating: 3.45,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/TAbcQw8dFCXUlqVHjtWIYA/o.jpg',
      keyword: null,
      vicinity: '750 Chicago Avenue'
    }),
    Restaurant.create({
      name: 'Lucky Platter',
      location: [42.0338098, -87.6783881],
      price_level: 2,
      rating: 4.5,
      yelpRating: 3.5,
      radiusRating: 4,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/cmQXA4zcrini7Kjh-v_D1w/o.jpg',
      keyword: null,
      vicinity: '514 Main Street'
    }),
    Restaurant.create({
      name: 'Udupi Palace Restaurant',
      location: [41.997479, -87.694005],
      price_level: 2,
      rating: 3.4,
      yelpRating: 3.5,
      radiusRating: 3.45,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/0Hs6wH3_Pvv1V5iPcaQ6fQ/o.jpg',
      keyword: null,
      vicinity: '1841'
    }),
    Restaurant.create({
      name: 'Websters Wine Bar Chicago',
      location: [41.9290404, -87.7071021],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/sLq9ZM-UIZCP7SFz2QnytQ/o.jpg',
      keyword: null,
      vicinity: '2601 North Milwaukee Avenue'
    }),
    Restaurant.create({
      name: 'Longman & Eagle',
      location: [41.9300853, -87.7071462],
      price_level: 2,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/K4dJvbjFx-dMpYUVxY-vTA/o.jpg',
      keyword: null,
      vicinity: '2657 North Kedzie Avenue'
    }),
    Restaurant.create({
      name: 'Jam',
      location: [41.9335943, -87.7071875],
      price_level: 1,
      rating: 4.5,
      yelpRating: 3.5,
      radiusRating: 4,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/WhWdgwE_bLYd8xVTOnFfEA/o.jpg',
      keyword: null,
      vicinity: '2853 North Kedzie Avenue'
    }),
    Restaurant.create({
      name: 'Argo Georgian Bakery',
      location: [41.9976908, -87.7002285],
      price_level: 1,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/w8DD0ce5OMD6HqUU3g9IGg/o.jpg',
      keyword: null,
      vicinity: '2812 West Devon Avenue'
    }),
    Restaurant.create({
      name: 'Owen & Engine',
      location: [41.9304682, -87.6881636],
      price_level: 2,
      rating: 4.7,
      yelpRating: 4,
      radiusRating: 4.35,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/6w2liTJDOuCjhG2t7uFy1A/o.jpg',
      keyword: null,
      vicinity: '2700 North Western Avenue'
    }),
    Restaurant.create({
      name: 'Estrella Negra',
      location: [41.925, -87.6870783],
      price_level: 1,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/f0XyrBcn4SKI41xltyPbgA/o.jpg',
      keyword: null,
      vicinity: '2346 West Fullerton Avenue'
    }),
    Restaurant.create({
      name: 'Ramen Wasabi',
      location: [41.9194968, -87.6914874],
      price_level: 2,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/Tv5wtUME7PQRPjwf5tQCdg/o.jpg',
      keyword: null,
      vicinity: '2101 North Milwaukee Avenue'
    }),
    Restaurant.create({
      name: 'Irazu',
      location: [41.9154821, -87.6850766],
      price_level: 1,
      rating: 4.5,
      yelpRating: null,
      radiusRating: 4.5,
      yelpImg: null,
      keyword: null,
      vicinity: '1865 North Milwaukee Avenue'
    }),
    Restaurant.create({
      name: 'My Pi Pizza',
      location: [41.918339, -87.678079],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/AEPppNM4fzEzphASDTjIaA/o.jpg',
      keyword: null,
      vicinity: '2010 North Damen Avenue E'
    }),
    Restaurant.create({
      name: 'The Bristol',
      location: [41.921046, -87.678002],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/EfJUMMFhY5S1vkiHdV6GQQ/o.jpg',
      keyword: null,
      vicinity: '2152 North Damen Avenue'
    }),
    Restaurant.create({
      name: 'Vienna Beef Factory Store & Cafe',
      location: [41.9263561, -87.6775825],
      price_level: 1,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/WdXTnzq0llLkw9io_XLocA/o.jpg',
      keyword: null,
      vicinity: '2501 North Damen Avenue'
    }),
    Restaurant.create({
      name: "Steak 'n Shake",
      location: [42.0267871, -87.7068467],
      price_level: 1,
      rating: 3.7,
      yelpRating: 2.5,
      radiusRating: 3.1,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/7bSm1f7W71jf__mnd1d25A/o.jpg',
      keyword: null,
      vicinity: '2209 Oakton Street'
    }),
    Restaurant.create({
      name: '90 Miles Cuban Cafe',
      location: [41.917692, -87.691817],
      price_level: 2,
      rating: 4.3,
      yelpRating: 4,
      radiusRating: 4.15,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/Ms_SObwYCBBlJdAvFWD9Tg/o.jpg',
      keyword: null,
      vicinity: '2540 West Armitage Avenue'
    }),
    Restaurant.create({
      name: "Kuma's Corner",
      location: [41.9395522, -87.7004528],
      price_level: 2,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/belsZm6xXyXQsfVvCeBJRg/o.jpg',
      keyword: null,
      vicinity: '2900 West Belmont Avenue'
    }),
    Restaurant.create({
      name: 'Honey Butter Fried Chicken',
      location: [41.9426309, -87.7028216],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/34tUuwT_1kfQRDoWfU3GWA/o.jpg',
      keyword: null,
      vicinity: '3361 North Elston Avenue'
    }),
    Restaurant.create({
      name: 'Reggies Chicago',
      location: [41.8539813, -87.6267559],
      price_level: 2,
      rating: 4.4,
      yelpRating: 3.5,
      radiusRating: 3.95,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/e66fxyp9nSRHIeZKUnETXg/o.jpg',
      keyword: null,
      vicinity: '2105 South State Street'
    }),
    Restaurant.create({
      name: 'Triple Crown Restaurant',
      location: [41.852452, -87.631856],
      price_level: 2,
      rating: 4.1,
      yelpRating: 3.5,
      radiusRating: 3.8,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/i9bEIXLqb2qUx4lIEXbrag/o.jpg',
      keyword: null,
      vicinity: '2217 South Wentworth Avenue'
    }),
    Restaurant.create({
      name: 'Cai',
      location: [41.854543, -87.6322579],
      price_level: 2,
      rating: 4.2,
      yelpRating: 3.5,
      radiusRating: 3.85,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/vJIPg1b9mTUFebkdhwuqfQ/o.jpg',
      keyword: null,
      vicinity: '2100 South Archer Avenue'
    }),
    Restaurant.create({
      name: 'Chilam Balam',
      location: [41.9372248, -87.6441305],
      price_level: 2,
      rating: 4.5,
      yelpRating: 3.5,
      radiusRating: 4,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/zNzeDMdLbS4ffdcajaLLlw/o.jpg',
      keyword: null,
      vicinity: '3023 North Broadway'
    }),
    Restaurant.create({
      name: 'Chicago Diner',
      location: [41.9440181, -87.6492138],
      price_level: 2,
      rating: 4.7,
      yelpRating: 4,
      radiusRating: 4.35,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/XeX9rBrRaVDphaE6lLFuGQ/o.jpg',
      keyword: null,
      vicinity: '3411 North Halsted Street'
    }),
    Restaurant.create({
      name: "Pequod's Pizza",
      location: [41.921885, -87.6644455],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/jlB3XA4XnnoU6omD9TSk5Q/o.jpg',
      keyword: null,
      vicinity: '2207 North Clybourn Avenue'
    }),
    Restaurant.create({
      name: 'Floriole Cafe & Bakery',
      location: [41.9218346, -87.6591992],
      price_level: 2,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/prPNLCR8ZKNcsUs5jjWcGg/o.jpg',
      keyword: null,
      vicinity: '1220 West Webster Avenue'
    }),
    Restaurant.create({
      name: 'Cafe Ba-Ba-Reeba!',
      location: [41.9189836, -87.6486878],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/jMNRpAcS1sPTAcSSTfCDrg/o.jpg',
      keyword: null,
      vicinity: '2024 North Halsted Street'
    }),
    Restaurant.create({
      name: 'Chicago Pizza and Oven Grinder Company',
      location: [41.920771, -87.6373581],
      price_level: 2,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/11hDAi0npubr65KFVRcJ1Q/o.jpg',
      keyword: null,
      vicinity: '2121 North Clark Street'
    }),
    Restaurant.create({
      name: 'Balena - Temporarily Closed',
      location: [41.912034, -87.648149],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/yP1thyrm9J_KrFjwicowXw/o.jpg',
      keyword: null,
      vicinity: '1633 North Halsted Street'
    }),
    Restaurant.create({
      name: "Connie's Pizza",
      location: [41.8491836, -87.6408601],
      price_level: 2,
      rating: 4.4,
      yelpRating: 3.5,
      radiusRating: 3.95,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/BTeJejAPQNCd4XkAmz1tQA/o.jpg',
      keyword: null,
      vicinity: '2373 South Archer Avenue'
    }),
    Restaurant.create({
      name: 'Han 202 Restaurant',
      location: [41.837921, -87.641748],
      price_level: 2,
      rating: 4.8,
      yelpRating: 4,
      radiusRating: 4.4,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/VT7bch9ehJhqknFOM8grsA/o.jpg',
      keyword: null,
      vicinity: '605 West 31st Street'
    }),
    Restaurant.create({
      name: 'nana',
      location: [41.8345012, -87.64605],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/GUko2hbYUaPCakg5M_W56w/o.jpg',
      keyword: null,
      vicinity: '3267 South Halsted Street'
    }),
    Restaurant.create({
      name: 'Buffalo Wings & Rings',
      location: [41.8316161, -87.6462546],
      price_level: 2,
      rating: 4.1,
      yelpRating: 3,
      radiusRating: 3.55,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/NMXMhFgjYdG_yqYNxT6PWg/o.jpg',
      keyword: null,
      vicinity: '3434 South Halsted Street'
    }),
    Restaurant.create({
      name: "Chicago's Home of Chicken & Waffles",
      location: [41.8224587, -87.6165072],
      price_level: 2,
      rating: 4.1,
      yelpRating: 3.5,
      radiusRating: 3.8,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/1nIilxbWoCAq4DIMTCJp9g/o.jpg',
      keyword: null,
      vicinity: '3947 South King Drive'
    }),
    Restaurant.create({
      name: 'Acadia',
      location: [41.85904, -87.6252412],
      price_level: 4,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/cm9sXwtOMxTPD3G6Uo2u1w/o.jpg',
      keyword: null,
      vicinity: '1639 South Wabash Avenue'
    }),
    Restaurant.create({
      name: 'Ada Street',
      location: [41.9124417, -87.6624316],
      price_level: 2,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/reSkThL4K0SDPkMNXZZQQQ/o.jpg',
      keyword: null,
      vicinity: '1664 North Ada Street'
    }),
    Restaurant.create({
      name: 'Noodles and Company',
      location: [41.9176804, -87.6599992],
      price_level: 1,
      rating: 4,
      yelpRating: 3.5,
      radiusRating: 3.75,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/k2T3eri0hoK_G7_C0ExBRQ/o.jpg',
      keyword: null,
      vicinity: '2000 North Clybourn Avenue'
    }),
    Restaurant.create({
      name: 'Azteca Grill',
      location: [41.9498541, -87.6583944],
      price_level: 2,
      rating: 4.2,
      yelpRating: 4,
      radiusRating: 4.1,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/-txywtozomBqL6XrIrFbiw/o.jpg',
      keyword: null,
      vicinity: '3731 North Clark Street'
    }),
    Restaurant.create({
      name: 'Tango Sur',
      location: [41.9507772, -87.6638525],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/EiI7sh3K5jpB9dWCTPwwbg/o.jpg',
      keyword: null,
      vicinity: '3763 North Southport Avenue'
    }),
    Restaurant.create({
      name: "Kroll's South Loop",
      location: [41.858007, -87.624199],
      price_level: 2,
      rating: 4.1,
      yelpRating: 3,
      radiusRating: 3.55,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/QwIlQPwCP5YQLccgpyMxwA/o.jpg',
      keyword: null,
      vicinity: '1736 South Michigan Avenue'
    }),
    Restaurant.create({
      name: 'Weather Mark Tavern',
      location: [41.8619084, -87.6236391],
      price_level: 2,
      rating: 4.2,
      yelpRating: 3.5,
      radiusRating: 3.85,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/Ot-CM_xBv8im2ehBQ5kMGA/o.jpg',
      keyword: null,
      vicinity: '1503 Michigan Avenue'
    }),
    Restaurant.create({
      name: 'The Chicago Firehouse Restaurant',
      location: [41.8639646, -87.6237626],
      price_level: 3,
      rating: 4.4,
      yelpRating: 3.5,
      radiusRating: 3.95,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/cFnaDTvya9RY51-uwxB2Nw/o.jpg',
      keyword: null,
      vicinity: '1401 South Michigan Avenue'
    }),
    Restaurant.create({
      name: "Jason's Deli",
      location: [41.865574, -87.640241],
      price_level: 2,
      rating: 4.3,
      yelpRating: 3.5,
      radiusRating: 3.9,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/eVFz28R2PzxAF5euGnf2MA/o.jpg',
      keyword: null,
      vicinity: '1258 South Canal Street'
    }),
    Restaurant.create({
      name: "Martyrs'",
      location: [41.9519563, -87.6770555],
      price_level: 1,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/DpliljoppjvvLwxN1_lNgQ/o.jpg',
      keyword: null,
      vicinity: '3855 North Lincoln Avenue'
    }),
    Restaurant.create({
      name: 'The Globe Pub',
      location: [41.9544097, -87.6777563],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/wZ8DFKub72WHefVTDiOXtA/o.jpg',
      keyword: null,
      vicinity: '1934 West Irving Park Road'
    }),
    Restaurant.create({
      name: 'Jai Yen Restaurant',
      location: [41.950078, -87.6492],
      price_level: 2,
      rating: 4.4,
      yelpRating: 3.5,
      radiusRating: 3.95,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/giXkumfzm2MVkyBJlCivdQ/o.jpg',
      keyword: null,
      vicinity: '3736 North Broadway'
    }),
    Restaurant.create({
      name: 'Houndstooth Saloon',
      location: [41.943381, -87.653246],
      price_level: 2,
      rating: 3.9,
      yelpRating: 3,
      radiusRating: 3.45,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/_e-W_BaTTF3PhFC6SpV2yA/o.jpg',
      keyword: null,
      vicinity: '3369 North Clark Street'
    }),
    Restaurant.create({
      name: "Domino's Pizza",
      location: [41.8662532, -87.6403051],
      price_level: 1,
      rating: 2.3,
      yelpRating: 2,
      radiusRating: 2.15,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/273OR_wfErlDqtbG38ssSA/o.jpg',
      keyword: null,
      vicinity: '1234 South Canal Street'
    }),
    Restaurant.create({
      name: 'La Taberna Tapas on Halsted',
      location: [41.865285, -87.646728],
      price_level: 2,
      rating: 4.2,
      yelpRating: 3.5,
      radiusRating: 3.85,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/08yrra40GS9PMhfi_IYMag/o.jpg',
      keyword: null,
      vicinity: '5021'
    }),
    Restaurant.create({
      name: 'Skylark',
      location: [41.8527891, -87.6461986],
      price_level: 1,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/9zFG9-y59jDa-60vsr2mMQ/o.jpg',
      keyword: null,
      vicinity: '2149 South Halsted Street'
    }),
    Restaurant.create({
      name: "Lady Gregory's Irish Bar & Restaurant",
      location: [41.977892, -87.66856],
      price_level: 2,
      rating: 4.4,
      yelpRating: 3.5,
      radiusRating: 3.95,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/XnHrbwzhoThcn06-G6cJVA/o.jpg',
      keyword: null,
      vicinity: '5260 North Clark Street'
    }),
    Restaurant.create({
      name: "Hamburger Mary's",
      location: [41.979961, -87.668526],
      price_level: 2,
      rating: 4.3,
      yelpRating: 3.5,
      radiusRating: 3.9,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/KIOT7OQulnndVRiSBsxnhQ/o.jpg',
      keyword: null,
      vicinity: '5400 North Clark Street'
    }),
    Restaurant.create({
      name: "Maria's Packaged Goods and Community Bar",
      location: [41.8380761, -87.6511042],
      price_level: 2,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/U9RA6PiuQ-HG0PmVvLc7GA/o.jpg',
      keyword: null,
      vicinity: '960 West 31st Street'
    }),
    Restaurant.create({
      name: "Lalo's on maxwell",
      location: [41.8645979, -87.6464661],
      price_level: 2,
      rating: 3.7,
      yelpRating: 2.5,
      radiusRating: 3.1,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/J07iExqFQ9B-7QG-AgiILA/o.jpg',
      keyword: null,
      vicinity: '733 West Maxwell Street'
    }),
    Restaurant.create({
      name: "Francesca's on Taylor",
      location: [41.8694511, -87.6617604],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/4inDadwmdEjibeyP1O5-3w/o.jpg',
      keyword: null,
      vicinity: '1400 West Taylor Street'
    }),
    Restaurant.create({
      name: 'WestEnd',
      location: [41.8818017, -87.6607513],
      price_level: 2,
      rating: 4.2,
      yelpRating: 3.5,
      radiusRating: 3.85,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/5kqU_5NuSsRe4S8HYrv51Q/o.jpg',
      keyword: null,
      vicinity: '1326 West Madison Street'
    }),
    Restaurant.create({
      name: 'Bottom Lounge',
      location: [41.8852404, -87.6617254],
      price_level: 2,
      rating: 4.5,
      yelpRating: 3.5,
      radiusRating: 4,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/JlJIzwkjDqb_jtj1vpS6tA/o.jpg',
      keyword: null,
      vicinity: '1375 West Lake Street'
    }),
    Restaurant.create({
      name: 'Next',
      location: [41.886606, -87.651973],
      price_level: 4,
      rating: 4.8,
      yelpRating: 4,
      radiusRating: 4.4,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/SmDi4jPntxv4wfnpGRh5Rw/o.jpg',
      keyword: null,
      vicinity: '953 West Fulton Market'
    }),
    Restaurant.create({
      name: 'Cobra Lounge',
      location: [41.8863849, -87.6666826],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/_5LtfbwFzd89AQ19V1NiMg/o.jpg',
      keyword: null,
      vicinity: '235 North Ashland Avenue'
    }),
    Restaurant.create({
      name: 'Billy Goat Tavern',
      location: [41.88137, -87.665885],
      price_level: 1,
      rating: 4,
      yelpRating: 2.5,
      radiusRating: 3.25,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/shFWoXogm7kl_n6NVGzJuQ/o.jpg',
      keyword: null,
      vicinity: '1535 West Madison Street'
    }),
    Restaurant.create({
      name: 'Haymarket Pub & Brewery',
      location: [41.884188, -87.6472815],
      price_level: 2,
      rating: 4.3,
      yelpRating: 3.5,
      radiusRating: 3.9,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/fAdddNFlJwNX1YJQJ2npaQ/o.jpg',
      keyword: null,
      vicinity: '737 West Randolph Street'
    }),
    Restaurant.create({
      name: 'The Publican',
      location: [41.8865703, -87.6490005],
      price_level: 3,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/fEu3lTgRSl-Fvcvzqc38Qw/o.jpg',
      keyword: null,
      vicinity: '837 West Fulton Market'
    }),
    Restaurant.create({
      name: 'Yu Choy Chinese Restaurant',
      location: [41.902383, -87.6654788],
      price_level: 2,
      rating: 3.2,
      yelpRating: 1,
      radiusRating: 2.1,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/TtniEqmcyrewD_3D9INgVw/o.jpg',
      keyword: null,
      vicinity: '1146 North Milwaukee Avenue'
    }),
    Restaurant.create({
      name: 'Carbon',
      location: [41.896371, -87.668643],
      price_level: 1,
      rating: 4.3,
      yelpRating: 3.5,
      radiusRating: 3.9,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/w_wcwHKwcqNm1VlaUpRylg/o.jpg',
      keyword: null,
      vicinity: '810 North Marshfield Avenue'
    }),
    Restaurant.create({
      name: 'Coalfire',
      location: [41.890838, -87.6598577],
      price_level: 2,
      rating: 4.6,
      yelpRating: 4,
      radiusRating: 4.3,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/QWLo302K3VHpXtL5EWlBQw/o.jpg',
      keyword: null,
      vicinity: '1321 West Grand Avenue'
    }),
    Restaurant.create({
      name: 'Arami',
      location: [41.8957682, -87.6733207],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/jZ5_DER7jd9B3Hhclby58A/o.jpg',
      keyword: null,
      vicinity: '1829 West Chicago Avenue'
    }),
    Restaurant.create({
      name: 'The Boundary Tavern and Grille',
      location: [41.903357, -87.6762365],
      price_level: 2,
      rating: 4,
      yelpRating: 3,
      radiusRating: 3.5,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/GDkcisYX3Bbp-aBPnkIrkA/o.jpg',
      keyword: null,
      vicinity: '1932 West Division Street'
    }),
    Restaurant.create({
      name: 'Blue Line Lounge & Grill',
      location: [41.9095818, -87.6777204],
      price_level: 2,
      rating: 4.3,
      yelpRating: 4,
      radiusRating: 4.15,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/FxzYt4yvWU90AN_uuB8Fdw/o.jpg',
      keyword: null,
      vicinity: '1548 North Damen Avenue'
    }),
    Restaurant.create({
      name: 'LOKaL',
      location: [41.9106249, -87.6753825],
      price_level: 2,
      rating: 3.9,
      yelpRating: 3.5,
      radiusRating: 3.7,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/d0SXhnGUq20geybZm9M9tw/o.jpg',
      keyword: null,
      vicinity: '1904 West North Avenue'
    }),
    Restaurant.create({
      name: 'LOKaL',
      location: [41.9106249, -87.6753825],
      price_level: 2,
      rating: 3.9,
      yelpRating: 3.5,
      radiusRating: 3.7,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/d0SXhnGUq20geybZm9M9tw/o.jpg',
      keyword: null,
      vicinity: '1904 West North Avenue'
    }),
    Restaurant.create({
      name: 'Mindy’s HotChocolate',
      location: [41.9136778, -87.6773652],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/fACKXO6vPkJHUCA64oObYg/o.jpg',
      keyword: null,
      vicinity: '1747 North Damen Avenue'
    }),
    Restaurant.create({
      name: 'Mott St',
      location: [41.9071502, -87.6672727],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/YK0JIh49H3u8JxRP3wKQJw/o.jpg',
      keyword: null,
      vicinity: '1401 North Ashland Avenue'
    }),
    Restaurant.create({
      name: 'Orange Garden Restaurant',
      location: [41.9543012, -87.6780497],
      price_level: 2,
      rating: 4.1,
      yelpRating: 3,
      radiusRating: 3.55,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/Ay5H6_y-kcik70KE7oNeiw/o.jpg',
      keyword: null,
      vicinity: '1942 West Irving Park Road'
    }),
    Restaurant.create({
      name: 'Cho Sun Ok Restaurant',
      location: [41.9579004, -87.6815705],
      price_level: 1,
      rating: 4.2,
      yelpRating: 3.5,
      radiusRating: 3.85,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/Gb3djDhf1UncqjXYpfdeEw/o.jpg',
      keyword: null,
      vicinity: '4200 North Lincoln Avenue'
    }),
    Restaurant.create({
      name: 'Spacca Napoli Pizzeria',
      location: [41.963201, -87.673795],
      price_level: 2,
      rating: 4.7,
      yelpRating: 4,
      radiusRating: 4.35,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/wNzXwZlrUFTs_BlsShbOnA/o.jpg',
      keyword: null,
      vicinity: '1769 West Sunnyside Avenue'
    }),
    Restaurant.create({
      name: "Gene's Sausage Shop and Delicatessen",
      location: [41.9678013, -87.6882966],
      price_level: 2,
      rating: 4.7,
      yelpRating: 4.5,
      radiusRating: 4.6,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/ofTGir7o38T0ZZX1jLw_Wg/o.jpg',
      keyword: null,
      vicinity: '4750 North Lincoln Avenue'
    }),
    Restaurant.create({
      name: 'Isla Pilipina Restaurant',
      location: [41.9682536, -87.6916932],
      price_level: 1,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/G2fO46uG38BrAzA31xnrCQ/o.jpg',
      keyword: null,
      vicinity: '2501 West Lawrence Avenue'
    }),
    Restaurant.create({
      name: 'goosefoot',
      location: [41.9687601, -87.6959234],
      price_level: 4,
      rating: 4.8,
      yelpRating: 4.5,
      radiusRating: 4.65,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/9SU7KqFFVEdWy0ui5bMg8g/o.jpg',
      keyword: null,
      vicinity: '2656 West Lawrence Avenue'
    }),
    Restaurant.create({
      name: 'Sticky Rice',
      location: [41.954673, -87.688754],
      price_level: 1,
      rating: 4.3,
      yelpRating: 4,
      radiusRating: 4.15,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/TzXxVGQRkSo5r3o2ZYp4zQ/o.jpg',
      keyword: null,
      vicinity: '3727'
    }),
    Restaurant.create({
      name: 'Julius Meinl Restaurant and Cafe',
      location: [41.9472245, -87.6637245],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media4.fl.yelpcdn.com/bphoto/TO7JY7pn1pfj-pX3lkwVWw/o.jpg',
      keyword: null,
      vicinity: '3601 North Southport Avenue'
    }),
    Restaurant.create({
      name: 'Southport Lanes & Billiards',
      location: [41.9423684, -87.6636562],
      price_level: 2,
      rating: 4.4,
      yelpRating: 3.5,
      radiusRating: 3.95,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/rBA6epLb7A6ins2jaO-icQ/o.jpg',
      keyword: null,
      vicinity: '3325 North Southport Avenue'
    }),
    Restaurant.create({
      name: 'Nori Sushi Lincoln Park',
      location: [41.9327569, -87.6535455],
      price_level: 2,
      rating: 4.4,
      yelpRating: 4,
      radiusRating: 4.2,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/FOIUVQzoXdojxay6B8ritA/o.jpg',
      keyword: null,
      vicinity: '954 West Diversey Parkway'
    }),
    Restaurant.create({
      name: "Paddy Long's Beer & Bacon Pub",
      location: [41.932711, -87.655049],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/IyU_Lpa6vBc726ad7hlkEA/o.jpg',
      keyword: null,
      vicinity: '1028 West Diversey Parkway'
    }),
    Restaurant.create({
      name: "Cheesie's Pub & Grub Lakeview",
      location: [41.94004, -87.653833],
      price_level: 1,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media1.fl.yelpcdn.com/bphoto/S7zLPO7tZ5ixJ2WwR6y6Nw/o.jpg',
      keyword: null,
      vicinity: '958 West Belmont Avenue'
    }),
    Restaurant.create({
      name: "Sheffield's Beer & Wine Garden",
      location: [41.9416409, -87.6543741],
      price_level: 2,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/QAqvG94U2_8rEwc7Bq1ZSg/o.jpg',
      keyword: null,
      vicinity: '3258 North Sheffield Avenue'
    }),
    Restaurant.create({
      name: "Al's Beef",
      location: [41.9439741, -87.6541031],
      price_level: 1,
      rating: 4.3,
      yelpRating: 3.5,
      radiusRating: 3.9,
      yelpImg:
        'https://s3-media2.fl.yelpcdn.com/bphoto/foOhW6laOtPUdXL1Dx8CcQ/o.jpg',
      keyword: null,
      vicinity: '3420 North Clark Street'
    }),
    Restaurant.create({
      name: 'Pasteur',
      location: [41.9825693, -87.6597405],
      price_level: 3,
      rating: 4.3,
      yelpRating: 4,
      radiusRating: 4.15,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/I9Mr4IlLJFkMxPEiyIGlxA/o.jpg',
      keyword: null,
      vicinity: '5525 North Broadway'
    }),
    Restaurant.create({
      name: 'bopNgrill',
      location: [42.0027991, -87.6611122],
      price_level: 1,
      rating: 4.5,
      yelpRating: 4,
      radiusRating: 4.25,
      yelpImg:
        'https://s3-media3.fl.yelpcdn.com/bphoto/yTu1FwwIQVVZb-58SlBwZg/o.jpg',
      keyword: null,
      vicinity: '6604 North Sheridan Road'
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
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
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
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
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
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 51
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 58
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 140
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 100
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 35
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 23
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 48
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 19
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 76
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 133
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 64
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 86
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 152
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 45
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 3
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 13
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 49
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 143
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 66
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 147
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 80
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 141
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 6
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 38
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 34
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 56
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 84
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 17
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 9
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 117
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 74
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 159
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 78
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 53
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 139
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 123
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 87
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 126
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 114
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 151
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 82
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 102
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 1
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 33
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 89
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 79
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 106
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 57
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 134
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 104
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 154
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 112
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 12
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 2
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 30
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 156
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 10
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 92
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 14
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 77
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 28
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 149
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 136
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 155
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 113
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 85
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 110
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 137
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 99
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 121
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 62
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 32
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 97
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 96
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 95
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 31
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 146
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 122
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 73
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 127
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 63
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 153
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 20
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 132
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 91
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 50
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 135
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 60
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 142
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 67
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 115
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 25
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 144
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 109
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 59
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 90
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 11
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 101
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 22
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 129
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 37
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 150
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 24
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 70
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 138
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 116
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 61
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 107
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 44
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 111
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 94
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 98
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 21
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 65
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 15
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 130
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 55
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 5
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 52
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 43
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 26
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 4
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 131
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 71
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 108
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 68
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 47
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 54
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 16
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 41
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 157
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 7
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 158
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 69
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 29
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 125
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 88
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 27
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 39
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 18
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 119
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 8
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 75
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 148
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 103
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 124
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 145
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 93
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 128
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 81
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 36
    }),
    WaitTime.create({
      time: 30,
      restaurantId: 160
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 118
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 46
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 105
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 42
    }),
    WaitTime.create({
      time: 60,
      restaurantId: 40
    }),
    WaitTime.create({
      time: 90,
      restaurantId: 72
    }),
    WaitTime.create({
      time: 0,
      restaurantId: 83
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 120
    }),
    WaitTime.create({
      time: 15,
      restaurantId: 42
    }),
  ]);
  console.log(`seeded ${waitTimes.length} waittimes`);

  console.log(`seeded successfully`);

  const checkIns = await Promise.all([
    CheckIn.create({
      userId: 1,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 92
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 81
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 79
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 95
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 131
    }),
    CheckIn.create({
      userId: 1,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 121
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 32
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 160
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 92
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 21
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 2,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 81
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 130
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 92
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 3,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 160
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 32
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 26
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 21
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 4,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 138
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 81
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 21
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 32
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 5,
      restaurantId: 92
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 121
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 81
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 26
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 160
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 21
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 57
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 142
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 6,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 130
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 142
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 7,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 26
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 92
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 57
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 131
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 69
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 142
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 8,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 69
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 95
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 21
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 9,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 121
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 142
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 95
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 57
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 10,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 26
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 32
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 142
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 92
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 11,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 121
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 160
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 79
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 138
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 12,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 138
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 121
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 130
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 21
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 32
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 95
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 13,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 131
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 21
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 121
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 142
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 69
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 160
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 14,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 32
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 131
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 26
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 79
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 57
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 95
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 160
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 15,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 92
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 138
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 16,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 130
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 95
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 138
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 160
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 92
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 79
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 26
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 131
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 17,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 130
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 79
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 57
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 142
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 18,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 130
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 57
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 69
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 26
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 79
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 142
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 19,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 79
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 69
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 121
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 138
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 130
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 81
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 20,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 138
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 79
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 21
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 81
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 130
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 121
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 21,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 95
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 148
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 69
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 131
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 81
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 58
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 22,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 21
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 79
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 95
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 69
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 121
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 160
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 84
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 23,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 142
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 26
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 160
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 121
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 29
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 79
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 32
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 69
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 25
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 65
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 24,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 144
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 35
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 95
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 26
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 57
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 53
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 39
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 43
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 131
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 127
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 19
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 25,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 72
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 117
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 125
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 31
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 119
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 60
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 92
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 12
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 158
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 151
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 94
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 107
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 23
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 8
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 55
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 81
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 99
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 32
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 93
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 62
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 149
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 138
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 90
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 116
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 97
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 131
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 153
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 68
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 41
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 128
    }),
    CheckIn.create({
      userId: 26,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 69
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 11
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 75
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 48
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 22
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 111
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 16
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 135
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 138
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 155
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 112
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 102
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 118
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 95
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 123
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 47
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 122
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 44
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 140
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 76
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 133
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 10
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 34
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 37
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 2
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 6
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 81
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 30
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 156
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 150
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 160
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 26
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 77
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 5
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 120
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 159
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 141
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 82
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 145
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 17
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 32
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 74
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 57
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 27,
      restaurantId: 63
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 105
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 88
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 147
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 101
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 64
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 20
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 139
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 1
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 132
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 33
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 89
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 136
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 50
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 126
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 100
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 66
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 27
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 15
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 110
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 80
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 86
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 81
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 87
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 91
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 113
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 131
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 54
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 96
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 42
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 108
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 46
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 103
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 61
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 7
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 67
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 14
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 32
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 13
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 51
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 40
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 92
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 73
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 129
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 98
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 114
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 59
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 85
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 70
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 49
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 134
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 21
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 24
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 146
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 52
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 4
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 137
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 104
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 157
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 154
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 45
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 143
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 138
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 83
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 78
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 69
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 3
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 109
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 124
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 9
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 38
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 152
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 106
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 36
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 115
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 71
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 28
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 18
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 56
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 130
    }),
    CheckIn.create({
      userId: 28,
      restaurantId: 141
    })

    // CheckIn.create({
    //   userId: 1,
    //   restaurantId: 1
    // }),
    // CheckIn.create({
    //   userId: 1,
    //   restaurantId: 5
    // }),
    // CheckIn.create({
    //   userId: 1,
    //   restaurantId: 8
    // }),
    // CheckIn.create({
    //   userId: 1,
    //   restaurantId: 7
    // }),
    // CheckIn.create({
    //   userId: 1,
    //   restaurantId: 13
    // }),
    // CheckIn.create({
    //   userId: 1,
    //   restaurantId: 11
    // }),
    // CheckIn.create({
    //   userId: 1,
    //   restaurantId: 14
    // }),
    // CheckIn.create({
    //   userId: 2,
    //   restaurantId: 1
    // }),
    // CheckIn.create({
    //   userId: 2,
    //   restaurantId: 5
    // }),
    // CheckIn.create({
    //   userId: 2,
    //   restaurantId: 8
    // }),
    // CheckIn.create({
    //   userId: 2,
    //   restaurantId: 14
    // }),
    // CheckIn.create({
    //   userId: 2,
    //   restaurantId: 6
    // }),
    // CheckIn.create({
    //   userId: 2,
    //   restaurantId: 12
    // }),
    // CheckIn.create({
    //   userId: 2,
    //   restaurantId: 2
    // }),
    // CheckIn.create({
    //   userId: 2,
    //   restaurantId: 9
    // }),
    // CheckIn.create({
    //   userId: 2,
    //   restaurantId: 11
    // }),
    // CheckIn.create({
    //   userId: 2,
    //   restaurantId: 18
    // }),
    // CheckIn.create({
    //   userId: 3,
    //   restaurantId: 12
    // }),
    // CheckIn.create({
    //   userId: 3,
    //   restaurantId: 13
    // }),
    // CheckIn.create({
    //   userId: 3,
    //   restaurantId: 14
    // }),
    // CheckIn.create({
    //   userId: 3,
    //   restaurantId: 17
    // }),
    // CheckIn.create({
    //   userId: 3,
    //   restaurantId: 18
    // }),
    // CheckIn.create({
    //   userId: 3,
    //   restaurantId: 1
    // }),
    // CheckIn.create({
    //   userId: 3,
    //   restaurantId: 4
    // })
  ]);
  console.log(`seeded ${checkIns.length} check ins`);

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
