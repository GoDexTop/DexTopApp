const express = require('express');
const path = require('path');
const helmet = require('helmet');
const { exec } = require('child_process');

const app = express();
const port = 1010;
const root = path.resolve(__dirname);

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "*"],
        styleSrc: ["'self'", "'unsafe-inline'", "*"],
        fontSrc: ["'self'", "data:", "*"],
        imgSrc: ["'self'", "data:", "*"],
        connectSrc: ["'self'", "*"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      }
    },
    hsts: {
      maxAge: 63072000,
      includeSubDomains: true,
      preload: true,
    },
  })
);

app.use(express.static(root));

app.get('*', (req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

app.listen(port, '127.0.0.1', (err) => {
  if (err) {
    console.error('Error starting server:', err);
    return;
  }

  const url = `http://127.0.0.1:${port}`;
  const platform = process.platform;

  console.log(`WELCOME TO THE DEXTOP SERVER`);
  console.log(`----------`);
  console.log(`Paste this URL in your browser`);
  console.log(`----------`);
  console.log(`Server running at - ${url}`);
  console.log(`----------`);
  console.log(`Serving files from: ${root}`);

  if (platform === 'win32') {
    exec(`start ${url}`);
  } else if (platform === 'darwin') {
    exec(`open ${url}`);
  } else if (platform === 'linux') {
    exec(`xdg-open ${url}`);
  } else {
    console.log(`Please manually open your browser and go to ${url}`);
  }
});













