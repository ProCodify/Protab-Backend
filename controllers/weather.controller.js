const weatherService = require("../services/weather.service");
const formatDistanceToNow = require("date-fns/formatDistanceToNow");
const store = require("../store/weather.store");
const getWeather = async () => {
  let weatherData = store.getData();

  if (!Object.keys(weatherData.data).length) {
    let newData = await weatherService.fetchWeather();
    store.updateData(newData);
  }
  weatherData = store.getData();

  return {
    ...weatherData.data,
    lastUpdatedAt: formatDistanceToNow(weatherData.lastUpdatedAt),
  };
};

module.exports = { getWeather };
