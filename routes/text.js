const express = require('express');

const router = express.Router();

const words = require('../data/words');

router.get('/', (req, res) => {
   let abbr = req.body.abbr.toLowerCase();

   for (let word in words) abbr = abbr.replaceAll(new RegExp(`(?<![\w\d])${words[word]}(?![\w\d])`, 'g'), word);

   res.send(abbr);
});

module.exports = router;
