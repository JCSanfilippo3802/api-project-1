const http = require('http');
const url = require('url');
const query = require('querystring');

const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  GET: {
    '/': htmlHandler.getIndex,
    '/favicon.ico': htmlHandler.getIndex,
    '/style.css': htmlHandler.getStyle,
    '/bundle.js': htmlHandler.getBundle,
    '/getHero': jsonHandler.getHero,
    notFound: jsonHandler.notFound,
  },
  HEAD: {
    '/getHero': jsonHandler.getHeroesMeta,
    notFound: jsonHandler.notFoundMeta,
  },
  POST: {
    '/addHero': jsonHandler.addHero,
    notFound: jsonHandler.notFoundMeta,
  },
  notFound: jsonHandler.notFoundMeta,
};

const parseBody = (request, response, handler) => {
  const body = [];

  request.on('error', (err) => {
    console.dir(err);
    response.statusCode = 400;
    response.end();
  });

  request.on('data', (chunk) => {
    body.push(chunk);
  });

  request.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    const bodyParams = query.parse(bodyString);

    handler(request, response, bodyParams);
  });
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  const params = query.parse(parsedUrl.query);


  if (request.method === 'POST') {
    parseBody(request, response, urlStruct.POST[parsedUrl.pathname]);
  } else {
    urlStruct[request.method][parsedUrl.pathname](request, response, params);
  }
};

// start HTTP server
http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
