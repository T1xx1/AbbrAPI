const { readFileSync, unlinkSync, writeFileSync } = require('fs');

module.exports = class Json {
   constructor(path, initial = {}) {
      this.initial = initial;
      this.path = path;

      this.init();
   }

   del() {
      unlinkSync(this.path);
   }
   init() {
      try {
         this.read();
      } catch {
         this.value = this.initial;
         this.write();
      }
   }
   read() {
      this.value = JSON.parse(readFileSync(this.path, 'utf8'));
   }
   write() {
      writeFileSync(this.path, JSON.stringify(this.value, null, 3));
   }
};
