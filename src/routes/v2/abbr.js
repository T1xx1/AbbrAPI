const router = require('express').Router();

const words = require('../../exports');

router.post('/', (req, res) => {
   try {
      if (req.body.text) throw 'body text param required';
   } catch (m) {
      res.status(400).send(m);

      return;
   }

   for (let word in words) req.body.text = req.body.text.replaceAll(new RegExp(`\\b${word}\\b`, 'g'), words[word]);

   res.send(req.body.text);
});

module.exports = router;
