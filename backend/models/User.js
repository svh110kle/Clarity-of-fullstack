const mongoose = require('mongoose');

// Create schema (structure of data)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // name must be given
  },
  email: {
    type: String,
    required: true
  }
});

// Create model (collection in MongoDB)
const User = mongoose.model('User', userSchema);

module.exports = User;
