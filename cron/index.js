const {
  updateCache: updateNewsData,
} = require("../controllers/news.controller");
const {
  updateCache: updateWeatherData,
} = require("../controllers/weather.controller");
const config = require("../config/config");

const cron = require("node-cron");
const cronOptions = {
  timezone: "Asia/Dhaka",
};

const runCronJobs = () => {
  cron.schedule(
    config.cron.news,
    () => {
      updateNewsData();
    },
    cronOptions
  );
  cron.schedule(
    config.cron.weather,
    () => {
      updateWeatherData();
    },
    cronOptions
  );
  console.log("Cron Jobs Started");
};

module.exports = runCronJobs;
