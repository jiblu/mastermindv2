const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mastermind', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected
  console.log('connected to mongoose')
})

// schema
const gameuserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  scores: [{
    date: String,
    score: Number
  }]
})

const GameUsers = mongoose.model('gameusers', gameuserSchema)

module.exports = GameUsers
