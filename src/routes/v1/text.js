const router = require('express').Router();

router.post('/', (req, res) => {
   let body = req.body;

   try {
      if (!body.abbr) throw 'body abbr param required';
   } catch (m) {
      res.status(422).send(m);

      return;
   }

   res.send({
      text: require('../../replacer')(body.abbr, require('../../inverter')(require('../../exports'))),
   });
});

module.exports = router;
