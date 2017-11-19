const express = require('express')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const keys = require('./config/keys')

require('./services/passport')
const authRoutes = require('./routes/authRoutes')

const mongoseConfig = keys.mongoose
mongoose.connect(mongoseConfig.mongoURI, mongoseConfig.opts)
  .then(
    () => console.log('A connection to MongoDB has been successfully established'),
    (err) => console.error('[Moongose Error]: Error establishing MongoDB connection.', err.message)
  )

const app = express()
authRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
