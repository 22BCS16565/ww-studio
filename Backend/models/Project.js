const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: String,
  contactNumber: String,
  idea: String
});

module.exports = mongoose.model('Project', projectSchema);
