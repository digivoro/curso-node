let deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  getNombre: function () {
    return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
  }
};

// Extraccion a variables clasica:
// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;

// Destructuracion
// let { nombre, apellido, poder } = deadpool;
// console.log(nombre, apellido, poder);

// Alias
let { nombre: primerNombre, apellido, poder } = deadpool;
console.log(primerNombre, apellido, poder);
