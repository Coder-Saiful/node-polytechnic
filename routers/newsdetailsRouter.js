const { showdetailsPage } = require('../controllers/newsdetailsController');

const router = require('express').Router();

// show home page

router.get('/', showdetailsPage);

module.exports = router;