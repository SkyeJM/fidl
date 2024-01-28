const express = require('express');
const router = express.Router();
const { getSubscribers, addSubscriber, removeSubscriber } = require('../controllers/subscriberController');

router.get('/', getSubscribers);
router.post('/', addSubscriber);
router.delete('/:id', removeSubscriber);

module.exports = router;
