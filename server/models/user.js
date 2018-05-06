const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
})

// Create a new collection in MongonDB
mongoose.model('users', userSchema)
