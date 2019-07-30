import { watchFile } from 'fs';
const { spawn } = require('child_process');

const appPath = './app.js';

let app = respawn();

watchFile(appPath, (curr, prev) => {
  console.log(`[RUN] ${appPath}`);
  app.kill();

  setTimeout(function() {
    app = respawn();
  }, 200);
});

function respawn() {
  return spawn('node', [appPath]);
}
