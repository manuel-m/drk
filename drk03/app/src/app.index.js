import express from '../lib/express.esm';

const PORT = 3001;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('drk03-app\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
