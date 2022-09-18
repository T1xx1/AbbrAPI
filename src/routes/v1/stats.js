const router = require('express').Router();

router.post('/', (req, res) => {
   let body = req.body;

   let abbr = body.abbr;
   let text = body.text;

   try {
      if (!abbr) throw 'body abbr param required';
      if (!text) throw 'body text param required';
   } catch (m) {
      res.status(422).send(m);

      return;
   }

   let char = {
      abbr: {
         length: abbr.length,
      },
      diff: {},
      text: {
         length: text.length,
         percentage: 100,
      },
   };
   let word = {
      abbr: {
         length: abbr.split(' ').length,
      },
      diff: {},
      text: {
         length: text.split(' ').length,
         percentage: 100,
      },
   };

   char.diff.length = char.text.length - char.abbr.length;
   word.diff.length = word.text.length - word.abbr.length;
   char.abbr.percentage = (char.abbr.length / char.text.length) * 100;
   word.abbr.percentage = (word.abbr.length / word.text.length) * 100;

   char.diff.percentage = 100 - char.abbr.percentage;
   word.diff.percentage = 100 - word.abbr.percentage;

   res.send({
      char: char,
      word: word,
   });
});

module.exports = router;
