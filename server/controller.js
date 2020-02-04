const Users = require('../database/index.js')

const controller = {
  getAllUsers: (req, res) => {
    Users.find()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  },
  addUser: (req, res) => {
    const { username, email, password } = req.query
    Users.create({
      username: username,
      email: email,
      password: password
    })
      .then(() => res.status(200).send('post success'))
      .catch(err => res.status(404).send(err))
  }
}

module.exports = controller