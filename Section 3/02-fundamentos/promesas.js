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

let getEmpleado = id => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
      reject(`No existe el empleado con id ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
};

// Manejar resolve
// getEmpleado(10).then(empleado => {
//   console.log("Empleado de BD", empleado);
// });

// Manejar resolve+reject
// getEmpleado(10).then(
//   empleado => {
//     console.log("Empleado de BD", empleado);
//   },
//   err => {
//     console.log(err);
//   }
// );

// Tarea: Implementar getSalario como promesa:
let getSalario = empleado => {
  return new Promise((resolve, reject) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
      reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
    } else {
      // Resolve se dispara 1 sola vez, aunque la llame varias veces (a diferencia de la implementacion por callback)
      resolve({
        nombre: empleado.nombre,
        salario: salarioDB.salario
      });
    }
  });
};

// Implementar ademas getSalario como promesa:
// getEmpleado(3).then(
//   empleado => {
//     getSalario(empleado).then(
//       salario => console.log(salario),
//       err => console.log(err)
//     );
//   },
//   err => console.log(err)
// );

// Encadenar promesas + Manejar errores con catch
getEmpleado(5)
  .then(empleado => {
    return getSalario(empleado);
  })
  .then(salario => {
    console.log(salario);
  })
  .catch(err => console.log(err));
