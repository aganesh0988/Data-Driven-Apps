const express = require('express');
const app = require('./app');
// const morgan = require('morgan');

const router = express.Router();
// router.use(morgan('dev'));


router.get('/', (req, res) => {
  throw new Error('This is a test error!');
  res.render('index', { title: 'Home' });
});

module.exports = router;
