const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// Add a new review
router.post('/reviews', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get reviews for a route
router.get('/reviews/:routeId', async (req, res) => {
  try {
    const reviews = await Review.find({ routeId: req.params.routeId });
    res.send(reviews);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;