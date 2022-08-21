const express = require('express');

const router = express.Router();

const words = require('../data/words');

router.get('/', (req, res) => {
   let abbr = ` ${req.body.abbr.toLowerCase()} `;

   for (let word in words) abbr = abbr.replaceAll(` ${words[word]} `, word);

   res.send(abbr);
});

module.exports = router;
