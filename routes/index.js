const router = require("express").Router();
const newsRoute = require("./news.route");
const weatherRoute = require("./weather.route");
const statusController = require("../controllers/status.controller");

router.get("/", (req, res, next) => {
  try {
    const status = statusController.getStatus();
    res.status(200).json(status);
  } catch (error) {
    next(error);
  }
});
router.use("/news", newsRoute);
router.use("/weather", weatherRoute);

module.exports = router;
