const express = require('express');

const router = express.Router();

const words = require('../data/words');

router.get('/', (req, res) => {
   try {
      if (req.body.text === undefined) throw 'text param required';
   } catch (m) {
      res.status(400).send(m);

      return;
   }

   let text = req.body.text;

   for (let word in words) text = text.replaceAll(new RegExp(`\\b${word}\\b`, 'g'), words[word]);

   res.send(text);
});

module.exports = router;
