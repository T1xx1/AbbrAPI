module.exports = obj =>
   Object.keys(obj).reduce((result, key) => {
      result[obj[key]] = key;

      return result;
   }, {});
