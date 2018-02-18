import {expect} from 'chai';
import {describe, it} from 'mocha';

import {factory} from './factories';

describe('Task', () => {
  describe('name', () => {
    it('accepts valid task name', async () => {
      // GIVEN
      const task = await factory.build('Task', {name: 'task:az190b'});

      // WHEN
      const error = task.validateSync();

      // THEN
      expect(error).to.equal(undefined);
      expect(task.name).to.equal('task:az190b');
    });

    it('rejects task name with no letters', async () => {
      // GIVEN
      const task = await factory.build('Task', {name: 'task:'});

      // WHEN
      const error = task.validateSync();

      // THEN
      expect(error.errors.name.message).to.equal('`task:` is an invalid task name');
    });

    it('rejects task name with non-alphanumeric characters', async () => {
      // GIVEN
      const task = await factory.build('Task', {name: 'task:-'});

      // WHEN
      const error = task.validateSync();

      // THEN
      expect(error.errors.name.message).to.equal('`task:-` is an invalid task name');
    });
  });
});
