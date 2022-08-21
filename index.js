require('dotenv').config();

const express = require('express');
//const mongoose = require('mongoose');

const app = express();

app.use(express.json());

/* mongoose.connect(process.env.dbUrl);

const db = mongoose.connection;

db.on('error', () => console.log('Db error'));
db.once('open', () => console.log('Db connected'));
 */

app.get('/', (req, res) => {
   res.send('Welcome to the Abbreviations API');
});

app.use('/abbr', require('./routes/abbr'));
app.use('/text', require('./routes/text'));

app.listen(process.env.PORT || 8000, () => console.log("Server's running..."));
