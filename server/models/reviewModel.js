const db = require('../config/db');

const Review = {
  getAll: (callback) => {
    const query = 'SELECT * FROM reviews';
    db.query(query, callback);
  },
  create: (data, callback) => {
    const query = 'INSERT INTO reviews (book_title, author, rating, review_text, date_added) VALUES (?, ?, ?, ?, NOW())';
    db.query(query, [data.book_title, data.author, data.rating, data.review_text], callback);
  },
  update: (id, data, callback) => {
    const query = 'UPDATE reviews SET book_title = ?, author = ?, rating = ?, review_text = ? WHERE id = ?';
    db.query(query, [data.book_title, data.author, data.rating, data.review_text, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM reviews WHERE id = ?';
    db.query(query, [id], callback);
  }
};

module.exports = Review;
