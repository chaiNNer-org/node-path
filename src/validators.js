'use strict';

const validateString = (str, name) => {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string for ${name}`);
  }
}

const validateObject = (obj, name) => {
  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError(`Expected an object for ${name}`);
  }
}

module.exports = {
  validateString,
  validateObject,
};
