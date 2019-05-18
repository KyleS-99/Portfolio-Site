const router = require('express').Router();

const { sendEmail } = require('../controller');
const { validateData } = require('../middleware');

// @route POST /api/email
// @desc Send email
// @access Public
router.post('/email', validateData, sendEmail);

module.exports = router;