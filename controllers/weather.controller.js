const weatherService = require("../services/weather.service");
const formatDistanceToNow = require("date-fns/formatDistanceToNow");
const store = require("../store/weather.store");
const { isEmpty } = require("../util/object-utils");
const updateCache = async () => {
  store.updateData({ weather: await weatherService.fetchWeather() });
};
const getWeather = async () => {
  if (!store.data.weather || isEmpty(store.data.weather)) {
    await updateCache();
  }

  return {
    weather: store.data.weather,
    lastUpdatedAt: store.data.lastUpdatedAt,
    lastUpdatedAtRelative: formatDistanceToNow(store.data.lastUpdatedAt),
  };
};

module.exports = { getWeather, updateCache };
