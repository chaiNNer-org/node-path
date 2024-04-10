'use strict';

/**
 * @param {Function} fn
 */
const makeCall = (fn) => {
  return fn.call.bind(fn);
}

module.exports = {
  FunctionPrototypeBind: makeCall(Function.prototype.bind),
  StringPrototypeCharCodeAt: makeCall(String.prototype.charCodeAt),
  StringPrototypeIndexOf: makeCall(String.prototype.indexOf),
  StringPrototypeLastIndexOf: makeCall(String.prototype.lastIndexOf),
  StringPrototypeReplace: makeCall(String.prototype.replace),
  StringPrototypeSlice: makeCall(String.prototype.slice),
  StringPrototypeToLowerCase: makeCall(String.prototype.toLowerCase),
}
