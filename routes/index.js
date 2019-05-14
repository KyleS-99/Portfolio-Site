const router = require('express').Router();

const { sendEmail } = require('../controller');

// @route POST /api/email
// @desc Send email
// @access Public
router.post('/email', sendEmail);

module.exports = router;