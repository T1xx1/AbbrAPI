const express = require('express');

const router = express.Router();

const words = require('../data/words');

router.get('/', (req, res) => {
   let text = ` ${req.body.text.toLowerCase()} `;

   for (let word in words) text = text.replaceAll(` ${word} `, words[word]);

   res.send(text);
});

module.exports = router;
