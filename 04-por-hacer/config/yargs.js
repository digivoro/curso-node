const { descripcion, completado } = {
  descripcion: {
    demand: true,
    alias: "d",
    desc: "Descripción de la tarea por hacer"
  },

  completado: {
    alias: "c",
    default: true,
    desc: "Estado de completado de la tarea"
  }
};

const { argv } = require("yargs")
  .command("crear", "Crear una tarea por hacer", {
    descripcion
  })
  .command("actualizar", "Actualizar el estado de una tarea", {
    descripcion,
    completado
  })
  .command("listar", "Lista de las tareas", {})
  .command("borrar", "Elimina una tarea", {
    descripcion
  })
  .help();

module.exports = {
  argv
};
