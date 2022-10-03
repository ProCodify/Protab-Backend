const router = require("express").Router();
const weatherController = require("../controllers/weather.controller");

router.get("/", async (_req, res, next) => {
  try {
    const currentWeather = await weatherController.getWeather();
    res.status(200).json(currentWeather);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
