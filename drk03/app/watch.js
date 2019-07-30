'use strict';
var fs = require('fs');
const { spawn: spawn } = require('child_process'),
  appPath = './app.js';
let app = respawn();
function respawn() {
  return spawn('node', [appPath]);
}
fs.watchFile(appPath, (curr, prev) => {
  console.log(`[RUN] ${appPath}`),
    app.kill(),
    setTimeout(function() {
      app = respawn();
    }, 500);
});
