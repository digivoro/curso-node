const axios = require("axios");

const getCurrentWeather = async (lat, lon) => {
  console.log(`Buscando datos del clima para (${lat},${lon})`);
  var options = {
    method: "GET",
    url: "https://community-open-weather-map.p.rapidapi.com/weather",
    params: { lat, lon, units: "metric", lang: "sp" },
    headers: {
      "x-rapidapi-key": "d5e0f7d902mshbc8b97df38e8084p1586dajsn61b7aa9f5e3d",
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
