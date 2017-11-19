// Set your OAuth Google tokens here and mongose config.

module.exports = {
  googleClientID: 'XXXXXXXXXXXXXXXXXXXX.apps.googleusercontent.com',
  googleClientSecret: 'XXXXXXXXXXXXXXXXXXXX',
  mongoose: {
    mongoURI: 'mongodb://<dbuser>:<dbpassword>@XXXXX.mlab.com:XXXXX/XXXXX',
    opts: {
      useMongoClient: true
    }
  }
}
