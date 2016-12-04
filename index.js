module.exports = function isset(string) {
  if (typeof string === 'string') {
    return string.replace(/ /g, '').length > 0;
  } else {
    return !(typeof string === 'undefined' || string === null);
  }
};
