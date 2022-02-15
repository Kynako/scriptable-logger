'use strict';

/**
 * @file logger.js
 * @author Kynako
 * @license MIT license
 * @see https://github.com/Kynako/scriptable-logger
 * @version 1.0.1
 */

/**
 * ERR_MSGS
 * @constant {{String: String|Function}}
 * @package
 */
const ERR_MSGS = {
  INVALID_TYPE: (name, expected, an=false) => `Supplied ${name} is not ${an ? 'an' : 'a'} ${expected}.`,
  TIMER_NOT_EXIST: label => `Timer '${label} doesn't exist.`
};

/**
 * LGRError
 * @class
 * @extends Error
 * @param {any} msg
 */
class LGRError extends Error {
  
  /**
   * constructor(msg)
   * @constructor
   * @param {String} msg
   * @return {LRGError}
   */
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  };
};

/**
 * Logger
 * @class
 * @description 
 *   A class to log something.
 */
module.exports = class Logger {
  
  /**
   * @property {Number} [groupIndentation=2]
   * @static
   * @public
   */
  static groupIndentation = 2;
  
  /**
   * @property {Number} [#amountOfGroupInfemtation=0];
   * @stric
   * @private
   */
  static #groupIndentationCount = 0;
  
  /**
   * @property {Map<K, V>} #counter
   * @static
   * @private
   */
  static #counter = new Map();
  
  /**
   * @property {Map<K, V>} #timer
   * @static
   * @private
   */
  static #timer = new Map();
  
  /**
   * +#createLogMessage(value)
   * @method
   * @static
   * @private
   * @param {any} [value]
   */
   static #createLogMessage = (value) => {
     const indent = this.#getCurrentIndentString();
     return indent + _scriptable_createLogMessage(value);
   };
   
   /**
    * +#getCurrentIndentString()
    * @method
    * @static
    * @private
    * @return {String}
    */
    static #getCurrentIndentString = () => {
      return ' '
       .repeat(this.groupIndentation)
       .repeat(this.#groupIndentationCount);
    };
  
  /**
   * +log([msg])
   * @method
   * @static
   * @public
   * @param {any} [msg]
   */
  static log = (msg) => {
    _scriptable_log(
      this.#createLogMessage(msg)
    );
  };
  
  /**
   * +warn([msg])
   * @method
   * @static
   * @public
   * @param {any} [msg]
   */
  static warn = (msg) => {
    _scriptable_logWarning(
      this.#createLogMessage(msg)
    );
  };
  
  /**
   * +error([msg])
   * @method
   * @static
   * @public
   * @param {any} [msg]
   */
  static error = (msg) => {
    _scriptable_logError(
      this.#createLogMessage(msg)
    );
  };
  
  /**
   * +assert(assertion[, msg])
   * @method
   * @static
   * @public
   * @param {any} assertion
   * @param {any} [message]
   */
  static assert = (assertion, msg) => {
    if(!assertion) this.error(msg);
  };
  
  /**
   * +group()
   * @method
   * @static
   * @public
   */
   static group = () => {
     this.#groupIndentationCount++;
   };
  
  /**
   * +groupEnd()
   * @method
   * @static
   * @public
   */
   static groupEnd = () => {
     this.#groupIndentationCount--;
   };
   
  /**
   * +count([label])
   * @method
   * @static
   * @param {String} [label='default']
   */
  static count = (label = 'default') => {
    if(typeof label !== 'string') {
      throw new LGRError(
        ERR_MSGS.INVALID_TYPE('label', 'String')
      );
    };
    let count = this.#counter.get(label) ?? 0;
    this.log(label + ': ' + ++count);
    this.#counter.set(label, count);
  };
  
  /**
   * +countReset([label])
   * @method
   * @static
   * @param {String} [label='default']
   */
  static countReset = (label = 'default') => {
    if(typeof label !== 'string') {
      throw new LGRError(
        ERROR_MSGS.INVALID_TYPE('label', 'String')
      );
    };
    this.#counter.set(label, 0);
    this.log(label + ': ' + 0);
  };
  
  /**
   * +time([label])
   * @method
   * @static
   * @param {String} [label='default']
   */
  static time = (label='default') => {
    if(typeof label !== 'string') {
      throw new LGRError(
        ERR_MSGS.INVALID_TYPE('label', 'String')
      );
    };
    
    this.#timer.set(label, Date.now());
  };
  
  /**
   * +timeLog([label])
   * @method
   * @static
   * @param {String} [label='default']
   */
  static timeLog = (label='default') => {
    if(typeof label !== 'string') {
      throw new LGRError(
        ERR_MSGS.IMVALID_TYPE('label', 'String')
      );
    };
    const time = this.#timer.get(label);
    if(!time) {
      throw new LGRError(
        ERR_MSGS.TIMER_NOT_EXIST(label)
      );
    };
    const elapsed = Date.now() - time;
    this.log(label + ': ' + elapsed + 'ms');
  };
  
  /**
   * +timeEnd([label])
   * @method
   * @static
   * @param {String} [label='default']
   */
  static timeEnd = (label='default') => {
    if(typeof label !== 'string') {
      throw new LGRError(
        ERR_MSGS.INVALID_TYPE('label', 'String')
      );
    };
    const time = this.#timer.get(label);
    if(!time) {
      throw new LGRError(
        ERR_MSGS.TIMER_NOT_EXIST(label)
      );
    };
    const elapsed = Date.now() - time;
    this.log(label + ': ' + elapsed + 'ms');
    this.#timer.delete(label);
  };
  
  /**
   * +pretty(value[, replacer[, space]])
   * @method
   * @static
   * @public
   * @param {any} value
   * @param {Function|Null} [replacer=null]
   * @param {String|Number} [space=2]
   */
  static pretty = (value, replacer=null, space=2) => {
    const stringified = JSON.stringify(value, replacer, space);
    this.log(stringified);
  };
};