const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const style = fs.readFileSync(`${__dirname}/../hosted/style.css`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);

const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};

const getIndex = (request, response) => {
  serveFile(response, index, 'text/html');
};

const getStyle = (request, response) => {
  serveFile(response, style, 'text/css');
};

const getBundle = (request, response) => {
  serveFile(response, bundle, 'application/javascript');
}

module.exports = {
  getIndex,
  getStyle,
  getBundle
};
