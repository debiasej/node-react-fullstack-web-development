const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)

const routes = app => {
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      res.status(401).send({ error: 'User not authenticated' })
    }
    await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    })

    req.user.credits += 5
    const user = await req.user.save()
    res.send(user)
  })
}

module.exports = routes
