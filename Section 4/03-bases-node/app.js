const { crearArchivoTabla } = require("./multiplicar/multiplicar");

// let base = 7;

let { argv } = process;
let parametro = argv[2];
let base = parametro.split("=")[1];

console.log(base);
// crearArchivoTabla(base)
//   .then(archivo => console.log(`Archivo creado: ${archivo}`))
//   .catch(err => {
//     console.log(err);
//   });
