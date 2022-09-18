const router = require('express').Router();

router.get('/', (req, res) => res.send(require('../../exports')));

module.exports = router;
