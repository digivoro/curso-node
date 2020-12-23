const { getSpottLatLon } = require("./lugar/lugar");
const { getCurrentWeather } = require("./clima/clima");
const colors = require("colors");

const { argv } = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Nombre de la ciudad de la que se quiere obtener el clima.",
    demand: true
  }
});

// getLugarLatLon(argv.direccion)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

const getInfo = async location => {
  try {
    let { city, lat, lon } = await getSpottLatLon(location);
    // console.log({ city, country, lat, lon });
    let clima = await getCurrentWeather(lat, lon);
    // console.log(clima);

    console.log(
      `El clima en`,
      `${city}`.yellow,
      `es de`,
      `${clima.weather[0].description}`.green
    );
    console.log(`Temperatura:`, `${clima.main.temp}C`.green);
    console.log(`Humedad:`, `${clima.main.humidity}%`.green);
  } catch (err) {
    return err;
  }
};

getInfo(argv.direccion).catch(err => console.log(err));
