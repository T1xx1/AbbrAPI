const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
   let obj = require('../data/words');

   obj = Object.keys(obj)
      .sort()
      .sort((a, b) => (a.split(' ').length > b.split(' ').length ? -1 : 1))
      .reduce((result, key) => {
         result[key] = obj[key];

         return result;
      }, {});

   res.send(obj);
});

module.exports = router;
