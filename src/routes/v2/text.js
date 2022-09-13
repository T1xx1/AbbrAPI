const router = require('express').Router();

const words = require('../../exports');

router.post('/', (req, res) => {
   try {
      if (!req.body.abbr) throw 'body abbr param required';
   } catch (m) {
      res.status(400).send(m);

      return;
   }

   for (let word in words) req.body.abbr = req.body.abbr.replaceAll(new RegExp(`\\b${words[word]}\\b`, 'g'), word);

   res.send(req.body.abbr);
});

module.exports = router;
