const { showNoticePage } = require('../controllers/noticeController');

const router = require('express').Router();

// show home page

router.get('/', showNoticePage);

module.exports = router;