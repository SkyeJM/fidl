const Feed = require('../models/Feed');

// Get all feeds
exports.getFeeds = async (req, res) => {
  try {
    const feeds = await Feed.find();
    res.json(feeds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new feed
exports.createFeed = async (req, res) => {
  const newFeed = new Feed({
    // Initialize with request body. Modify this based on your Feed model structure
    title: req.body.title,
    items: req.body.items,
    createdBy: req.body.createdBy
  });

  try {
    const savedFeed = await newFeed.save();
    res.status(201).json(savedFeed);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a feed
exports.updateFeed = async (req, res) => {
  try {
    const feed = await Feed.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!feed) {
      return res.status(404).json({ message: 'Feed not found' });
    }
    res.json(feed);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a feed
exports.deleteFeed = async (req, res) => {
  try {
    const feed = await Feed.findByIdAndDelete(req.params.id);
    if (!feed) {
      return res.status(404).json({ message: 'Feed not found' });
    }
    res.json({ message: 'Feed deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
