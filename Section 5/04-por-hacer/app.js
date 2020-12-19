const { argv } = require("./config/yargs");
const colors = require("colors");
const {
  crearTarea,
  getListado,
  actualizarTarea,
  borrarTarea
} = require("./tareas/tareas");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = crearTarea(argv.descripcion);
    console.log(tarea);
    break;

  case "listar":
    let listado = getListado();
    console.log("--- TAREAS POR HACER ---".green);
    for (let tarea of listado) {
      console.log();
      console.log(tarea.descripcion);
      console.log(
        "Estado:",
        tarea.completado ? `Listo`.green : `Pendiente`.yellow
      );
      console.log("---".green);
    }
    break;

  case "actualizar":
    let actualizado = actualizarTarea(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;

  case "borrar":
    let borrado = borrarTarea(argv.descripcion);
    console.log(borrado);
    break;

  default:
    break;
}
