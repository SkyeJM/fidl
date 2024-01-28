const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  title: String,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ContentItem' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feed', feedSchema);
