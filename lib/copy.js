'use strict';

/**
 * Expose copy
 * 
 * example:
 * copy({name: 'coming', age: 18}).to({age: 38});
 * copy({name: 'coming', age: 18}).toCover({age: 38});
 *
 * @param {Object} src
 * @retun {Copy}
 */

module.experts = Copy;


/**
 * Copy
 * @param {object} src
 * @param {boolean} widthAccess
 */

function Copy(src, widthAccess) {
  if (!(this instanceof Copy)) return new Copy(src, widthAccess);
  this.src = src;
  this._widthAccess = widthAccess;
}

/**
 * copy properties include getter and setter
 * @param {any} w
 * @param {any}
 */
 
Copy.prototype.widthAccess = function(w) {
  this._widthAccess = w !== false;
  return this;
}

/**
 * pick keys in src
 * @param {Object} keys
 * @return {Copy}
 */

Copy.prototype.pick = function(keys) {
  if (!Array.isArray(keys) ) {
    keys = Array.prototype.slice.call(arguments);
  }
  if (keys.length) {
    this.keys = keys;
  }
  return this;
}

/**
 * copy src to target, do not cover any property target has
 * @param {Object} target
 * @return {Object} target 
 */




/**
 * check obj[key] if defined
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function notDefined(obj, key) {
  return obj[key] === undefined
  && obj.__lookupGetter__(key) === undefined
  && obj.__lookupSetter__(key) === undefined;
}