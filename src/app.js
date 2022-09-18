require('dotenv').config();

const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/v1', require('./routes/v1/index'));

app.listen(process.env.PORT || 1000, () => console.log("Server's running..."));
