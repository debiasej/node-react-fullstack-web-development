const express = require('express')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const keys = require('./config/keys')
const path = require('path')

require('./models/user')
require('./models/survey')
require('./services/passport')
const authRoutes = require('./routes/authRoutes')
const billingRoutes = require('./routes/billingRoutes')
const surveyRoutes = require('./routes/surveyRoutes')

const mongoseConfig = keys.mongoose
mongoose.connect(mongoseConfig.mongoURI, mongoseConfig.opts)
  .then(
    () => console.log('A connection to MongoDB has been successfully established'),
    (err) => console.error('[Moongose Error]: Error establishing MongoDB connection.', err.message)
  )

const app = express()

app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // last 30 days
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)
billingRoutes(app)
surveyRoutes(app)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('../client/build'))

  // Serve up the index.html file if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
