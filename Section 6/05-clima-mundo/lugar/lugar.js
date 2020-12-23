const axios = require("axios");
const { config } = require("../config/config");

/**
 * Esta función no fue implementada porque el API retorna un objeto null. Usar getSpottLatLon()
 */
const getLugarLatLon = async direccion => {
  const encodedLocation = encodeURI(direccion);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedLocation}`,
    headers: {
      "x-rapidapi-key": "d5e0f7d902mshbc8b97df38e8084p1586dajsn61b7aa9f5e3d",
      "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com"
    }
  });

  let respuesta = await instance.get();
  if (respuesta.data.Results) {
    if (respuesta.data.Results.length === 0) {
      throw new Error(`No hay resultados para ${direccion}.`);
    } else {
      let locationData = respuesta.data.Results[0];
      let { name: location, lat, lon } = locationData;
      return {
        location,
        lat,
        lon
      };
    }
  } else {
    throw new Error(`No se obtuvieron resultados de parte del servidor.`);
  }
};

const getSpottLatLon = async location => {
  console.log(`Buscando datos de ubicación para ${location}`);
  const encodedLocation = encodeURI(location);

  var options = {
    method: "GET",
    url: "https://spott.p.rapidapi.com/places",
    params: { type: "CITY", limit: "10", q: `${encodedLocation}` },
    headers: {
      "x-rapidapi-key": config.rapidApiKey,
      "x-rapidapi-host": "spott.p.rapidapi.com"
    }
  };
  try {
    let { data } = await axios.request(options);
    // console.log(data);
    return {
      city: data[0].name,
      country: data[0].country.name,
      lat: data[0].coordinates.latitude,
      lon: data[0].coordinates.longitude
    };
  } catch (err) {
    return err;
  }
};

module.exports = {
  getLugarLatLon,
  getSpottLatLon
};
