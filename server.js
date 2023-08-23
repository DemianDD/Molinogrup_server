const express = require('express');
const bodyParser = require("body-parser");

const path = require('path');
const cors = require('cors')
const app = express();

app.use(express.static(path.join(__dirname + '/front')));

app.use(cors());

app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log('Server listening on port', PORT)
});