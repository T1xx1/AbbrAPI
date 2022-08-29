require('dotenv').config();

const { normalize } = require('path');

const express = require('express');

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(normalize(`${__dirname}/../public`)));

app.get('/', (req, res) => {
   res.render('index');
});

app.use('/abbr', require('./routes/abbr'));
app.use('/all', require('./routes/all'));
app.use('/text', require('./routes/text'));

app.listen(process.env.PORT || 8000, () => console.log("Server's running..."));
