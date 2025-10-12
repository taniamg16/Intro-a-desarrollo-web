// Gestión básica de datos con Session Storage

// Insertar o actualizar un dato
function guardarDato(clave, valor) {
  sessionStorage.setItem(clave, valor);
  console.log(`Dato guardado: ${clave} = ${valor}`);
}

// Eliminar un dato específico
function eliminarDato(clave) {
  sessionStorage.removeItem(clave);
  console.log(`Dato eliminado: ${clave}`);
}

// Consultar si un dato existe
function existeDato(clave) {
  if (sessionStorage.getItem(clave) !== null) {
    console.log(`El dato con clave "${clave}" existe.`);
    return true;
  } else {
    console.log(`El dato con clave "${clave}" no existe.`);
    return false;
  }
}

// Borrar todo el Session Storage
function limpiarSessionStorage() {
  sessionStorage.clear();
  console.log("Todos los datos de Session Storage han sido eliminados.");
}

// Ejemplos de uso
// guardarDato("usuario", "Arantxa");
// existeDato("usuario");
// eliminarDato("usuario");
// limpiarSessionStorage();
