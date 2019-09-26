const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
  },
  created_at: {
    type: Date,
  }
});


module.exports = commentSchema;
