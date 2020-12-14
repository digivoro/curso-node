let empleados = [
  {
    id: 1,
    nombre: "Fernando"
  },
  {
    id: 2,
    nombre: "Melissa"
  },
  {
    id: 3,
    nombre: "Juan"
  }
];

let salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 2000
  }
];
// ===========================================
let getEmpleado = (id, callback) => {
  let empleadoDB = empleados.find(empleado => empleado.id === id);

  if (!empleadoDB) {
    callback(`No existe el empleado con id ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

// getEmpleado(1, (err, empleado) => {
//   if (err) return console.log(err);
//   console.log(empleado);
// });
// ===========================================

// Implementar funcion getSalario

// Respuesta si encuentra empleado:
// {
//   nombre: 'Melissa',
//   salario: 2000
// }

// Respuesta si no encuentra empleado:
// 'No se encontró un salario para el empleado JUAN'
let getSalario = (empleado, callback) => {
  let salarioDB = salarios.find(salario => salario.id === empleado.id);

  if (!salarioDB) {
    callback(`No se encontró un salario para el empleado ${empleado.nombre}`);
  } else {
    // NOTA: Es posible llamar a callback mas de una vez en la funcion
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario
    });
  }
};

// Como lo llamé:
// getSalario(empleados[2], (err, salario) => {
//   if (err) return console.log(err);
//   console.log(salario);
// });
// ===========================================

// Cómo lo llamó el profe:
// Mejor porque atrapamos errores de no encontrar usuario por definicion de getEmpleado!
getEmpleado(2, (err, empleado) => {
  if (err) return console.log(err);

  getSalario(empleado, (err, salario) => {
    if (err) return console.log(err);
    console.log(salario);
  });
});
