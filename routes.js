const express = require('express');
const app = require('./app');
const db = require('./db/models');
// const morgan = require('morgan');

const router = express.Router();
// router.use(morgan('dev'));


router.get('/', async (req, res, next) => {
  try {
    const books = await db.Book.findAll({ order: [['title', 'ASC']] });
    res.render('index', { title: 'Home', books });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
