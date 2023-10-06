const { showHomePage } = require('../controllers/homeController');

const router = require('express').Router();

// show home page

router.get('/', showHomePage);

module.exports = router;