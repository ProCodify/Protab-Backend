module.exports = (message, error) => {
  const e = new Error(message);
  console.log(message, error);
  throw e;
};
