import {env} from '../config';

// Parse configuration constants
export const LOG_LEVEL = env.get('LOG_LEVEL', 'debug').required().asString();
