module.exports = class LGRError extends Error {
  
  /**
   * constructor(msg)
   * @param {String} msg
   */
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  };
};