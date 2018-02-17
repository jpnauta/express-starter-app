import mongoose from 'mongoose';
import * as validators from './validators';

require('./config'); // Initialize mongodb config

const schemaOpts = {
  timestamps: true,
};

// Add schemas here
export const Task = mongoose.model('Task', new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    validate: [
      {
        validator: validators.validTaskName,
        message: '`{VALUE}` is an invalid task name',
      },
    ],
  },
}, schemaOpts));
