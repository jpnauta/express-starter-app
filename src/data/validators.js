/**
 * @param name {String} task name
 * @returns {boolean} whether or not the name is valid
 */
function validTaskName(name) {
  return Boolean(name.match(/^task:[a-z0-9]+$/));
}

export {
  validTaskName,
};
