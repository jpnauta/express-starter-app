import http from 'http';

import logger from '../logging';
import app from '.';
import {API_PORT} from './config';

const server = http.createServer(app);

// Event listener for HTTP server "error" event.
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const port = API_PORT;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// Event listener for HTTP server "listening" event.
function onListening() {
  const addr = server.address();
  logger.info(`Listening on port ${addr.port}`);
}

server.on('error', onError);
server.on('listening', onListening);

export default server;
