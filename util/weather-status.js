const writeLog = require("../util/weather-log");
const getStatusByWeatherText = (condition) => {
  if (!condition) return null;
  const text = condition.toLowerCase();
  if (text === "sunny" || text === "clear") return "sunny";
  else if (
    text.includes("cloudy") ||
    text.includes("mist") ||
    text.includes("overcast")
  )
    return "cloudy";
  else if (text.includes("rain")) return "rain";
  else {
    writeLog(text);
    return "unknown";
  }
};
module.exports = getStatusByWeatherText;
