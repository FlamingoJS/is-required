const errorObject = { 'module': 'isset', 'message': 'This field is required.' };

module.exports = function isset(string) {
  if (typeof string === 'undefined' || string === null || string.length === 0) {
    return errorObject;
  } else {
    return true;
  }
};
