import {expect} from 'chai';
import {describe, it} from 'mocha';

import {factory} from './factories';

describe('Task', () => {
  describe('name', () => {
    it('accepts valid task name', (done) => {
      // GIVEN
      factory.build('Task', {name: 'task:az190b'})
        .then((task) => {
          // WHEN
          const error = task.validateSync();

          // THEN
          expect(error).to.equal(undefined);
          expect(task.name).to.equal('task:az190b');
          done();
        });
    });

    it('rejects task name with no letters', (done) => {
      // GIVEN
      factory.build('Task', {name: 'task:'})
        .then((task) => {
          // WHEN
          const error = task.validateSync();

          // THEN
          expect(error.errors.name.message).to.equal('`task:` is an invalid task name');
          done();
        });
    });

    it('rejects task name with non-alphanumeric characters', (done) => {
      // GIVEN
      factory.build('Task', {name: 'task:-'})
        .then((task) => {
          // WHEN
          const error = task.validateSync();

          // THEN
          expect(error.errors.name.message).to.equal('`task:-` is an invalid task name');
          done();
        });
    });
  });
});
