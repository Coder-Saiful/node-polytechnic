const { showContactPage } = require('../controllers/contactController');

const router = require('express').Router();

// show home page

router.get('/', showContactPage);

module.exports = router;