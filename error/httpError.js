module.exports = (message = "Something went wrong", status = 500) => {
  const e = new Error(message);
  e.status = status;
  if (status === 500) {
    console.log(e);
  }
  throw e;
};
