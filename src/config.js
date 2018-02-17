import _env from 'env-var';
import dotenv from 'dotenv';

// Export environment parser
export const env = _env;

// Load .env file into process environment variables
dotenv.config();

// Parse configuration constants
export const NODE_ENV = env.get('NODE_ENV').required().asString();
