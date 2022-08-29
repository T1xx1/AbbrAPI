const express = require('express');

const router = express.Router();

const words = require('../data/words');

router.get('/', (req, res) => {
   try {
      if (abbr === ' undefined ') throw 'abbr param required';
   } catch (m) {
      res.status(400).send(m);

      return;
   }

   let abbr = ` ${req.body.abbr} `;

   for (let word in words) abbr = abbr.replaceAll(new RegExp(`\\b${words[word]}\\b`, 'g'), word);

   res.send(abbr);
});

module.exports = router;
