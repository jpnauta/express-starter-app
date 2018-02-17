import {env} from '../config';

// Parse configuration constants
export const API_PORT = env.get('API_PORT', 3000).required().asIntPositive();
