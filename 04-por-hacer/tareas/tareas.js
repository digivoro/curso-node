const fs = require("fs");
const colors = require("colors");

let listadoTareas = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoTareas);
  fs.writeFile("db/data.json", data, err => {
    err ? console.log(err) : null;
    console.log("Se guardó data en db/data.json");
  });
};

const cargarDB = () => {
  try {
    listadoTareas = require("../db/data.json");
  } catch (error) {
    listadoTareas = [];
  }
};

const crearTarea = descripcion => {
  cargarDB();

  let tarea = {
    descripcion,
    completado: false
  };
  listadoTareas.push(tarea);
  guardarDB();
  return tarea;
};

const getListado = () => {
  cargarDB();
  return listadoTareas;
};

const actualizarTarea = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoTareas.findIndex(
    tarea => descripcion === tarea.descripcion
  );
  if (index >= 0) {
    listadoTareas[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrarTarea = descripcion => {
  cargarDB();
  let index = listadoTareas.findIndex(
    tarea => descripcion == tarea.descripcion
  );
  if (index >= 0) {
    let tareaEliminada = listadoTareas.splice(index, 1)[0];
    console.log("Se eliminó la tarea:".red, tareaEliminada.descripcion);
    guardarDB();
    return true;
  } else {
    return false;
  }
  guardarDB();
};

module.exports = {
  crearTarea,
  getListado,
  actualizarTarea,
  borrarTarea
};
