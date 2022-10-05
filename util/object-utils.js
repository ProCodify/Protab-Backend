const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

module.exports = { deepClone, isEmpty };
