// prod.js - production keys
// Set your OAuth Google tokens, mongose config and private key to encript user cookies.

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoose: {
    mongoURI: process.env.MONGO_URI,
    opts: {
      useMongoClient: true
    }
  },
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendGridKey: process.env.SEND_GRID_KEY
}
