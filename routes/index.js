const router = require("express").Router();
const newsRoute = require("./news.route");
const weatherRoute = require("./weather.route");

router.use("/news", newsRoute);
router.use("/weather", weatherRoute);

module.exports = router;
