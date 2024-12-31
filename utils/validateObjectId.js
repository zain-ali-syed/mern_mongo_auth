// utils/validateObjectId.js
const mongoose = require('mongoose');

// Utility function to validate MongoDB ObjectId (returns true or false)
const validateObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = validateObjectId;
