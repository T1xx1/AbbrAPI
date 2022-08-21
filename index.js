require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.send('Welcome to the Abbr (abbreviations) API');
});

app.use('/abbr', require('./routes/abbr'));
app.use('/text', require('./routes/text'));

app.listen(process.env.PORT || 8000, () => console.log("Server's running..."));
