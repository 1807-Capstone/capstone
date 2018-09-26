const Sequelize = require('sequelize')
const db = require('../db')

const WaitTime = db.define('waitTimes', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = WaitTime
