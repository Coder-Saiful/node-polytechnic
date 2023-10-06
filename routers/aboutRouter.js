const { showAboutPage } = require('../controllers/aboutController');

const router = require('express').Router();

// show home page

router.get('/', showAboutPage);

module.exports = router;