require("dotenv").config();
const error = require("../error/error");
const fetch = require("node-fetch");
const baseUrl = "http://api.weatherapi.com/v1";

const fetchWeather = async (query = "dhaka") => {
  try {
    const response = await fetch(
      `${baseUrl}/current.json?key=${process.env.WEATHER_API_KEY}&q=${query}`
    );
    const { current } = await response.json();
    return {
      temp_c: current?.temp_c,
      condition: current?.condition?.text,
      latestUpdate: current?.last_updated,
    };
  } catch (err) {
    error("Error fetching weather data.", err);
    return null;
  }
};

module.exports = { fetchWeather };
