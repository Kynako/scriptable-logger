/**
 * ERR_MSGS
 * @constant {{String: String|Function}}
 * @package
 */
const ERR_MSGS = {
  INVALID_TYPE: (name, expected, an=false) => `Supplied ${name} is not ${an ? 'an' : 'a'} ${expected}.`,
  TIMER_NOT_EXIST: label => `Timer '${label} doesn't exist.`
};

module.exports = ERR_MSGS