const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const router = require('./router.js')
const app = express()
const PORT = 3000

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/../public'))
app.use('/api', router)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
