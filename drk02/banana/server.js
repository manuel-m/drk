'use strict';

const express = require('express');

// Constants
const PORT = 3001;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('drk02-banana\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
