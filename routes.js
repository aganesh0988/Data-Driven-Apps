const express = require('express');
const app = require('./app');
const db = require('./db/models');
//const { values } = require('sequelize/types/lib/operators');
// const morgan = require('morgan');

const router = express.Router();
// router.use(morgan('dev'));


const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/', asyncHandler(async (req, res) => {
  const books = await db.Book.findAll({ order: [['title', 'ASC']] });
  res.render('book-list', { title: 'Books', books });
}));


module.exports = router;
