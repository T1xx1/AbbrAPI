module.exports = (text, obj) => {
   let change;

   do {
      change = false;

      for (let word in obj) {
         let match = new RegExp(`\\b${word}\\b`, 'g');

         if (text.match(match)) {
            change = true;
            text = text.replaceAll(match, obj[word]);

            break;
         }
      }
   } while (change);

   return text;
};
