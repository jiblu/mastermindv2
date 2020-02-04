const router = require('express').Router()
const controller = require('./controller.js')

router
  .route('/users')
  .get(controller.getAllUsers)
  .post(controller.addUser)

router
  .route('/user')
  .get(controller.getUser)
  .put(controller.updateScores)

module.exports = router