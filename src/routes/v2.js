const router = require('express').Router();

router.use('/abbr', require('./v2/abbr'));
router.use('/all', require('./v2/all'));
router.use('/text', require('./v2/text'));

module.exports = router;
