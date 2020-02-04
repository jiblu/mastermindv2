const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/3001', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  //we're connected
  console.log('connected to mongoose')
})

//schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  scores: [{
    date: String,
    score: Number
  }]
})

const User = mongoose.model('users', userSchema)

module.exports = User