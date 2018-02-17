import * as winston from 'winston';
import {LOG_LEVEL} from './config';

const logger = winston;

// Set logging level
logger.level = LOG_LEVEL;

export default logger;
