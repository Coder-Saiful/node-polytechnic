const { showNewsPage } = require('../controllers/newsController');

const router = require('express').Router();

// show home page

router.get('/', showNewsPage);

module.exports = router;