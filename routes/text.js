const express = require('express');

const router = express.Router();

const words = require('../data/words');

router.get('/', (req, res) => {
   let abbr = ` ${req.body.abbr} `;

   if (abbr === ' undefined ') res.status('400').send('abbr param required');

   for (let word in words) abbr = abbr.replaceAll(new RegExp(`\\b${words[word]}\\b`, 'g'), word);

   res.send(abbr);
});

module.exports = router;
