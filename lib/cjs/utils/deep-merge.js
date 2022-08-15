"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = exports.deepMerge = void 0;

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @description Method to check if an item is an object. Date and Function are considered
 * an object, so if you need to exclude those, please update the method accordingly.
 * @param item - The item that needs to be checked
 * @return {Boolean} Whether or not @item is an object
 */
var isObject = function isObject(item) {
  return item === Object(item) && !Array.isArray(item);
};
/**
 * @description Method to perform a deep merge of objects
 * @param {Object} target - The targeted object that needs to be merged with the supplied @sources
 * @param {Array<Object>} sources - The source(s) that will be used to update the @target object
 * @return {Object} The final merged object
 */


exports.isObject = isObject;

var deepMerge = function deepMerge(target) {
  // return the target if no sources passed
  if (!(arguments.length <= 1 ? 0 : arguments.length - 1)) {
    return target;
  }

  var result = target;

  if (isObject(result)) {
    var len = arguments.length <= 1 ? 0 : arguments.length - 1;

    for (var i = 0; i < len; i += 1) {
      var elm = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

      if (isObject(elm)) {
        for (var _key in elm) {
          if (elm.hasOwnProperty(_key)) {
            if (isObject(elm[_key])) {
              if (!result[_key] || !isObject(result[_key])) {
                result[_key] = {};
              }

              deepMerge(result[_key], elm[_key]);
            } else {
              if (Array.isArray(result[_key]) && Array.isArray(elm[_key])) {
                // concatenate the two arrays and remove any duplicate primitive values
                result[_key] = Array.from(new Set(result[_key].concat(elm[_key])));
              } else {
                result[_key] = elm[_key];
              }
            }
          }
        }
      }
    }
  }

  return result;
};

exports.deepMerge = deepMerge;