const express = require('express');
const sumDivByThreeOrFive = require('./controllers/sumDivByTreeOrFive');

const app = express();
app.use(express.json());

app.get('/somatorio/:number', sumDivByThreeOrFive)

app.listen(3000, () => console.log('Server running'));