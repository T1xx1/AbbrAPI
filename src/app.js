require('dotenv').config();

const express = require('express');

const app = express();

// Website
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/../public`));

// JSON requests
app.use(express.json());

app.get('/', (req, res) => res.render('index'));

app.use('/v2', require('./routes/v2'));

app.listen(process.env.PORT || 1000, () => console.log("Server's running..."));
