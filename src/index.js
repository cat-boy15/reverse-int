module.exports = function reverse (n) {
  let yoString = Math.abs(n).toString();
  let yoArray = yoString.split('');
  let result = yoArray.reverse().join('');

  return result
}
