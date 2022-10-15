'use strict';

const { spawn } = require('child_process');
let warn = "", error = "", suppresswarn = 0, suppresserror = 0;
const vnu = spawn('java', ['-jar', require('vnu-jar'), '--skip-non-html', './dist/', '--skip-non-css', './dist/assets/', '--skip-non-svg', './dist/assets/', '--format', 'text'])

vnu.stdout.on('data', (data) => {
  warn+=data;
});
vnu.stderr.on('data', (data) => {
  error+=data;
});

vnu.on('close', (code) => {
  warn.split('\n').forEach(line => {
    if(line.length !== 0){
      if(line.includes('dist/assets/libs') === false){
        console.warn('\n'+line);
      } else {
        ++suppresswarn;
      }
    }
  });
  error.split('\n').forEach(line => {
    if(line.length !== 0){
      if(line.includes('dist/assets/libs') === false){
        console.error('\n'+line);
        process.exitCode = 1;
      } else {
        ++suppresserror;
      }
    }
  });
  console.warn('Suppressed '+suppresswarn+' warnings relating to libs.');
  console.warn('Suppressed '+suppresserror+' errors relating to libs.');
  if (process.exitCode === 1) {
    console.error('\x1b[31;1;5mValidation failed.\x1b[0m');
    return;
  }
  console.log('\x1b[32;1mValidation passed.\x1b[0m');
});
