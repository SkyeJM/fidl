const express = require('express');
const router = express.Router();
const {
  getFeeds,
  createFeed,
  updateFeed,  // Import the updateFeed function
  deleteFeed   // Import the deleteFeed function
} = require('../controllers/feedController');

router.get('/', getFeeds);
router.post('/', createFeed);
router.put('/:id', updateFeed);  // Define the PUT route for updating a feed
router.delete('/:id', deleteFeed);  // Define the DELETE route for deleting a feed

module.exports = router;  // Export the router at the end of the file
