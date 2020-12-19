const { argv } = require("./config/yargs");
const { crearArchivoTabla, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;

  case "crear":
    crearArchivoTabla(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(err => {
        console.log(err);
      });
    break;

  default:
    console.log("Comando no reconocido");
    break;
}

// let parametro = argv2[2];
// let base = parametro.split("=")[1];
