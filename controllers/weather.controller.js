const weatherService = require("../services/weather.service");

const getWeather = async () => {
  const weatherStatus = await weatherService.fetchWeather();
  return weatherStatus;
};

module.exports = { getWeather };
