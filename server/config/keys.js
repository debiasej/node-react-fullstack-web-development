// Set your OAuth Google tokens, mongose config and private key to encript user cookies.

module.exports = {
  googleClientID: 'XXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com',
  googleClientSecret: 'XXXXXXXXXXXXXXXXXXXX',
  mongoose: {
    mongoURI: 'mongodb://<dbuser>:<dbpassword>@XXXXX.mlab.com:XXXXX/XXXXX',
    opts: {
      useMongoClient: true
    }
  },
  cookieKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
}
