// Declaracion de funcion normal: --------------------------------

// function sumar(a, b) {
//   return a + b;
// }
// console.log(sumar(10, 20));

// Declaracion de funcion flecha: --------------------------------

// let sumar = (a, b) => {
//   return a + b;
// };
// console.log(sumar(10, 20));

// Declaracion de fn flecha en una linea: --------------------------------

// let sumar = (a, b) => a + b;
// console.log(sumar(10, 20));

// Convertir a fn flecha: --------------------------------
// function saludar() {
//   return 'Hola mundo!';
// }
// let saludar = () => "Hola mundo!";

// Convertir a fn flecha: --------------------------------
let deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneración",
  // getNombre: function () {
  //   return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
  // }
  getNombre: () => {
    return `${this.nombre} ${this.apellido} - Poder: ${this.poder}`;
  }
};

console.log(deadpool.getNombre()); // undefined undefined - Poder: undefined
// el keyword 'this' en funciones flecha toma su valor desde el scope superior (global en este caso),
// en lugar del mismo donde esta definido
