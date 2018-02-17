import express from 'express';
import morgan from 'morgan';
import * as bodyParser from 'body-parser';
import statuses from 'statuses';

import routes from './routes';
import {NODE_ENV} from '../config';
import logger from '../logging';

const app = express();

// Logging
app.use(morgan('dev'));

// JSON parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// App routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  let status = err.status || err.statusCode || 500;
  if (status < 400) {
    status = 500;
  }
  res.statusCode = status;

  const body = {
    status,
  };

  if (status >= 500) {
    // internal server errors
    logger.error(err.stack);
    body.message = statuses[status];

    // Show stack trace, if not production
    if (NODE_ENV === 'dev') {
      body.stack = err.stack;
    }
  } else {
    // client errors
    body.message = err.message;

    // Propagate common statuses
    if (err.code) body.code = err.code;
    if (err.type) body.type = err.type;
  }

  res.json(body);
});


module.exports = app;
