const { showDepartmentsPage } = require('../controllers/departmentsController');

const router = require('express').Router();

// show home page

router.get('/', showDepartmentsPage);

module.exports = router;