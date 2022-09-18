const router = require('express').Router();

router.post('/', (req, res) => {
   let body = req.body;

   try {
      if (!body.text) throw 'body text param required';
   } catch (m) {
      res.status(422).send(m);

      return;
   }

   res.send({
      abbr: require('../../replacer')(body.text, require('../../exports')),
   });
});

module.exports = router;
