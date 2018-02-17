import {factory} from 'factory-girl';

import {Task} from '../../../dist/data/schemas';

factory.define('Task', Task, {
  name: 'task:123',
});

export {
  factory,
};
