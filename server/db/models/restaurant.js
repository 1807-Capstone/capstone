const Sequelize = require('sequelize');
const db = require('../db');

const Restaurant = db.define('restaurants', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  imgUrl: {
    type: Sequelize.STRING
  },
  hours: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 4
    }
  },
  yelpRating: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1,
      max: 5
    }
  },
  googleRating: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1,
      max: 5
    }
  },
  radiusRating: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 1,
      max: 5
    }
  }
});

// const Restaurant = db.define('restaurants', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true
//     }
//   },
//   // geometry: {
//   location: {
//     type: Sequelize.ARRAY(Sequelize.FLOAT),
//     allowNull: false
//     // lat: {
//     //   type: Sequelize.STRING,
//     //   allowNull: false
//     // },
//     // lng: {
//     //   type: Sequelize.STRING,
//     //   allowNull: false
//   },
//   //   }
//   // },
//   price_level: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//     validate: {
//       min: 1,
//       max: 4
//     }
//   },
//   rating: {
//     type: Sequelize.DECIMAL,
//     validate: {
//       min: 1,
//       max: 5
//     }
//   },
//   // yelpResults: {
//   yelpRating: {
//     type: Sequelize.DECIMAL,
//     validate: {
//       min: 1,
//       max: 5
//     }
//   },
//   photos: {
//     type: Sequelize.ARRAY(Sequelize.STRING)
//   },
//   // },
//   vicinity: {
//     type: Sequelize.STRING
//   },
//   radiusRating: {
//     type: Sequelize.DECIMAL,
//     validate: {
//       min: 1,
//       max: 5
//     }
//   }
// });

module.exports = Restaurant;
