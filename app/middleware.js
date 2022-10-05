const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const config = require("../config/config");
const middleware = [
  morgan("dev"),
  cors(),
  express.json(),
  rateLimit({
    windowMs: config.rate.time * 60 * 1000,
    max: config.rate.limit,
  }),
];

module.exports = middleware;
