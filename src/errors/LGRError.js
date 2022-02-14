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

module.exports = LGRError;