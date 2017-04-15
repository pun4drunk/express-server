// Get dependencies
const config = require('config');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

// Get API routes
const routes = require('./routes');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Set api routes
app.use('/', routes);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || config.get('port');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => process.stdout.write(`API running on localhost:${port}`));
