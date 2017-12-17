const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const keys = require('../config/keys')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  console.log('user: ' + user)
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })

      if (existingUser) {
        console.log('User already exists!')
        return done(null, existingUser)
      }

      // Make a new record
      const user = await new User({ googleId: profile.id }).save()
      console.log(`User ${profile.id} has been successfully saved`)
      done(null, user)
    }
  )
)
