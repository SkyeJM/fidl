const Subscriber = require('../models/Subscriber');

// Get all subscribers
exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new subscriber
exports.addSubscriber = async (req, res) => {
  const newSubscriber = new Subscriber({
    phone: req.body.phone
  });

  try {
    const savedSubscriber = await newSubscriber.save();
    res.status(201).json(savedSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove a subscriber
exports.removeSubscriber = async (req, res) => {
  try {
    await Subscriber.findByIdAndDelete(req.params.id);
    res.json({ message: 'Subscriber removed successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
