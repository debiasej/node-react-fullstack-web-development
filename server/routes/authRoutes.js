const passport = require('passport')

const routes = (app) => {
  app.get('/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  app.get('/auth/google/callback',
    passport.authenticate('google')
  )

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user) // User will be empty
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}

module.exports = routes
