const router = require('express').Router()
const controller = require('./controller.js')

router
  .route('/users')
  .get(controller.getAllUsers)
  .post(controller.addUser)

module.exports = router