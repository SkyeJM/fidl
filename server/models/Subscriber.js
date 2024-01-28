const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  subscribedFeeds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feed' }],
  joinedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
