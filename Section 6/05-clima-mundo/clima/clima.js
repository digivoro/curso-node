const axios = require("axios");
const { config } = require("../config/config");

const getCurrentWeather = async (lat, lon) => {
  console.log(`Buscando datos del clima para (${lat},${lon})`);
  var options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: { lat, lon, units: "metric", lang: "sp" },
    headers: {
      "x-rapidapi-key": config.rapidApiKey,
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
  };

  try {
    let { data } = await axios.request(options);
    return data;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getCurrentWeather
};
