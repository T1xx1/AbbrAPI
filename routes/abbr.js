const express = require('express');

const router = express.Router();

const words = require('../data/words');

router.get('/', (req, res) => {
   let text = ` ${req.body.text} `;

   if (text === ' undefined ') res.status('400').send('text param required');

   for (let word in words) text = text.replaceAll(new RegExp(`\\b${word}\\b`, 'g'), words[word]);

   res.send(text);
});

module.exports = router;
