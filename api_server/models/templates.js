const mongoose = require('mongoose');
const commentSchema = require('./comments');

const templatesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  download_amount: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  comments: {
    type: [commentSchema],
  },
  owner: {
    id: mongoose.Types.ObjectId,
    email: {
      type: String,
    }
  },
  active_status: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const Template = mongoose.model('Template', templatesSchema);

module.exports = Template;
