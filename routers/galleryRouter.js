const { showGalleryPage } = require('../controllers/galleryController');

const router = require('express').Router();

// show home page

router.get('/', showGalleryPage);

module.exports = router;