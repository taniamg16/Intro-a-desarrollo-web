// Función para probar .toEqual() y .toStrictEqual()
function obtenerObjeto() {
  return { nombre: "Arantxa", edad: 21 };
}

// Función para probar .toBeTruthy()
function obtenerValorVerdadero() {
  return "hola"; // cualquier valor truthy funciona
}

// Función para probar .toBeFalsy()
function obtenerValorFalso() {
  return 0; // cualquier valor falsy funciona
}

// Función para probar .toBeNull()
function devolverNull() {
  return null;
}

// Función para probar .toBeUndefined()
function devolverUndefined() {
  return undefined;
}

// Función para probar .toThrow()
function lanzarError() {
  throw new Error("Error generado para pruebas");
}

module.exports = {
  obtenerObjeto,
  obtenerValorVerdadero,
  obtenerValorFalso,
  devolverNull,
  devolverUndefined,
  lanzarError,
};
