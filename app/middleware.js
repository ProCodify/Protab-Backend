const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const middleware = [
  morgan("dev"),
  cors(),
  express.json(),
  rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
  }),
];

module.exports = middleware;
