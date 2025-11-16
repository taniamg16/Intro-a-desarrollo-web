const {
  obtenerObjeto,
  obtenerValorVerdadero,
  obtenerValorFalso,
  devolverNull,
  devolverUndefined,
  lanzarError,
} = require("./funciones-varias.js");

describe("Pruebas de funciones-varias", () => {
  test("Debe comparar objetos correctamente usando toEqual", () => {
    expect(obtenerObjeto()).toEqual({ nombre: "Arantxa", edad: 21 });
  });

  test("Debe comparar objetos estrictamente usando toStrictEqual", () => {
    expect(obtenerObjeto()).toStrictEqual({ nombre: "Arantxa", edad: 21 });
  });

  test("Debe retornar un valor truthy", () => {
    expect(obtenerValorVerdadero()).toBeTruthy();
  });

  test("Debe retornar un valor falsy", () => {
    expect(obtenerValorFalso()).toBeFalsy();
  });

  test("Debe retornar null correctamente", () => {
    expect(devolverNull()).toBeNull();
  });

  test("Debe retornar undefined correctamente", () => {
    expect(devolverUndefined()).toBeUndefined();
  });

  test("Debe lanzar un error usando toThrow", () => {
    expect(() => lanzarError()).toThrow("Error generado para pruebas");
  });
});
