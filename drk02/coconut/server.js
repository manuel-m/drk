'use strict';

const express = require('express');

// Constants
const PORT = 3002;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('drk02-coconut\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
