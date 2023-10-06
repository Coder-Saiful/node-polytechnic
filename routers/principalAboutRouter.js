const { showPrincipalPage } = require('../controllers/principalAboutController');

const router = require('express').Router();

// show home page

router.get('/', showPrincipalPage);

module.exports = router;