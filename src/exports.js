const { readFileSync } = require('fs');

let words = JSON.parse(readFileSync(`${__dirname}/data/words.json`, 'utf8'));

module.exports = words;
