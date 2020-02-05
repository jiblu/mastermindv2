const Users = require('../database/index.js')

const controller = {
  getAllUsers: (req, res) => {
    Users.find()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  },
  getUser: (req, res) => {
    const { username } = req.params
    Users.findOne({ username: username })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  },
  addUser: (req, res) => {
    const { username, email, password } = req.body
    Users.create({
      username: username,
      email: email,
      password: password,
      scores: []
    })
      .then(() => res.status(200).send('post success'))
      .catch(err => res.status(404).send(err))
  },
  updateScores: (req, res) => {
    const { username, scores } = req.body
    Users.findOneAndUpdate({ username: username }, { scores: scores })
      .then(() => res.status(200).send(`updated scores: ${scores}`))
      .catch(err => res.status(200).send(`error updating: ${err}`))
  }
}

module.exports = controller
