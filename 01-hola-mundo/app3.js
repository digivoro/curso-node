console.log("Inicio del programa");

setTimeout(function () {
  console.log("Primer timeout");
}, 3000);

setTimeout(function () {
  console.log("Segundo timeout");
}, 0);

setTimeout(function () {
  console.log("Tercer timeout");
}, 0);

console.log("Fin del programa");

/**
 * Orden de impresión:
 * 'Inicio del programa' > 'Fin del programa' > 'Segundo timeout' > 'Tercer timeout' > 'Primer timeout'
 * Esto es porque node ejecuta los procesos en la pila de procesos pero si uno de ellos requiere espera, lo pasa a cola de callbacks,
 * la que se va a ir resolviendo en el orden de espera cada vez que la pila de procesos esté desocupada.
 */
