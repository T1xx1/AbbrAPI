const router = require('express').Router();

router.use('/abbr', require('./abbr'));
router.use('/all', require('./all'));
router.use('/stats', require('./stats'));
router.use('/text', require('./text'));

module.exports = router;
