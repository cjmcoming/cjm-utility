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
 * param {object} src
 * param {boolean} widthAccess
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