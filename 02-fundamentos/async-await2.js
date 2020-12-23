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

// let getEmpleado = id => {
//   return new Promise((resolve, reject) => {
//     let empleadoDB = empleados.find(empleado => empleado.id === id);

//     if (!empleadoDB) {
//       reject(`No existe el empleado con id ${id}`);
//     } else {
//       resolve(empleadoDB);
//     }
//   });
// };

// getEmpleado con async/await:
let getEmpleado = async id => {
  let empleadoEncontrado = await empleados.find(empleado => empleado.id === id);
  return empleadoEncontrado
    ? empleadoEncontrado
    : `No existe el empleado con id ${id}`;
};

// let getSalario = empleado => {
//   return new Promise((resolve, reject) => {
//     let salarioDB = salarios.find(salario => salario.id === empleado.id);

//     if (!salarioDB) {
//       reject(`No se encontró un salario para el empleado ${empleado.nombre}`);
//     } else {
//       // Resolve se dispara 1 sola vez, aunque la llame varias veces (a diferencia de la implementacion por callback)
//       resolve({
//         nombre: empleado.nombre,
//         salario: salarioDB.salario,
//         id: empleado.id
//       });
//     }
//   });
// };

// getSalario con async/await:
let getSalario = async empleado => {
  let salarioEncontrado = await salarios.find(salario => {
    return salario.id === empleado.id;
  });

  if (salarioEncontrado) {
    return {
      nombre: empleado.nombre,
      salario: salarioEncontrado.salario,
      id: empleado.id
    };
  } else {
    throw new Error(
      `No se encontró un salario para el empleado ${empleado.nombre}`
    );
  }
};

let getInformacion = async id => {
  let empleado = await getEmpleado(id);
  let salario = await getSalario(empleado);
  return `${salario.nombre} tiene un salario de USD $${salario.salario}`;
};

getInformacion(3)
  .then(mensaje => console.log(mensaje))
  .catch(e => console.log(e));
