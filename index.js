require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('index');
});

app.use('/abbr', require('./routes/abbr'));
app.use('/all', require('./routes/all'));
app.use('/text', require('./routes/text'));

app.listen(process.env.PORT || 8000, () => console.log("Server's running..."));
