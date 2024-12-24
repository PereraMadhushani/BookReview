const Review = require('../models/reviewModel');

const getAllReviews = (req, res) => {
  Review.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

const createReview = (req, res) => {
  const data = req.body;
  Review.create(data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId });
  });
};

const updateReview = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Review.update(id, data, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.send('Review updated!');
  });
};

const deleteReview = (req, res) => {
  const { id } = req.params;
  Review.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.send('Review deleted!');
  });
};

module.exports = { getAllReviews, createReview, updateReview, deleteReview };
