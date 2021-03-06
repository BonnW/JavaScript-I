// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  const newArr = [];
  Object.keys(obj).forEach((key, value) => {
    newArr[value] = key;
  });
  return newArr;
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  const newArr = [];
  Object.keys(obj).forEach((key, value) => {
    newArr[value] = obj[key];
  });
  return newArr;
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = cb(obj[key]);
  });
  return newObj;
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  const arr = [];
  Object.keys(obj).forEach((key, value) => {
    arr[value] = [key, obj[key]];
  });
  return arr;
};

/* Extra credit */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  Object.keys(obj).forEach((key, value) => {
    newObj[obj[key]] = key;
  });
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const newObj = obj;
  Object.keys(defaultProps).forEach((prop) => {
    if (!newObj[prop]) {
      newObj[prop] = defaultProps[prop];
    }
  });
  return newObj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
};
