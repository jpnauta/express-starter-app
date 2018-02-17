import mongoose from 'mongoose';

import {env} from '../config';

// Parse configuration constants
export const MONGODB_CONNECTION_STRING = env.get('MONGODB_CONNECTION_STRING').required().asString();

// Initialize mongodb client
mongoose.connect(MONGODB_CONNECTION_STRING, {});

// Configure promise library
// http://mongoosejs.com/docs/promises.html
mongoose.Promise = Promise;
