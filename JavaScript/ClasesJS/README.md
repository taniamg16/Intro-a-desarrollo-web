# Clases en JavaScript
Tania Mendoza González
Introducción al Desarrollo Web

## Índice
- [Qué son las clases](#que-son-las-clases)
- [Cómo se usan](#como-se-usan)
- [Creación de instancias](#creacion-de-instancias)
- [Métodos y funciones](#metodos-y-funciones)
- [Ejemplos](#ejemplos)

## Qué son las clases
Las clases en JavaScript son plantillas para crear objetos, no objetos en si mismas. Es decir, una clase sirve como un modelo que define cómo se verán y comportarán los objetos que se creen a partir de ella. Dentro de una clase se pueden definir propiedades y métodos, y luego, al usar la palabra new, se pueden generar objetos basados en esa plantilla. De esta forma, las clases permiten crear fácilmente varios objetos con la misma estructura y comportamiento.

## Cómo se usan
Como ya mencionamos, las clases en JavaScript tienen dos características principales: la creación de instancias, que permite generar objetos basados en una misma plantilla, y la definición de métodos, que establecen las acciones o comportamientos que esos objetos pueden realizar. A continuación, veremos con más detalle cómo funciona cada una de estas partes.

### Creación de instancias
Para crear un objeto a partir de una clase, se usa la palabra clave new seguida del nombre de la clase, lo que genera una instancia de esa clase. La sintaxis básica es:
```bash
const miObjeto = new MiClase(arg1, arg2);
```

Dentro de la clase, hay un método especial llamado constructor. TODAS las clases deberían tenerlo. Ese constructor es automáticamente invocado cuando se crea la instancia con new. Su papel es inicializar propiedades del objeto (por ejemplo, asignar valores a this.propiedad). 
En la clase se define así:

```bash
class MiClase {
  constructor(param1, param2) {
    this.prop1 = param1;
    this.prop2 = param2;
  }
}
```

Así, cuando haces instancias un objeto con new, el constructor recibe los argumentos y asigna esos valores a las propiedades internas del objeto recién creado.


### Métodos y funciones
Dentro de una clase, los métodos son funciones que definen comportamientos para los objetos creados con esa clase. Se escriben usando la misma sintaxis que las funciones normales, pero dentro del cuerpo de la clase, sin la palabra clave function. Por ejemplo:

```bash
class Alumno {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
  cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }
}
```

Aquí saludar() y cambiarNombre(...) son métodos de la clase ALumno (funciones asociadas al objeto). Para llamarlos desde una instancia, se hace con la sintaxis de punto:
```bash
const a = new Alumno("Arantxa");
p.saludar();
p.cambiarNombre("Jaqueline")

```
## Ejemplos
Ahora, crearemos 3 clases con al menos 3 atributos y 3 funciones/métodos. En esta carpeta, hay un archivo individual para cada una. Los archivos son los siguientes:

1. Planta.js
2. Maceta.js
3. Fertilizante.js

En cada una, se pueden ver los conceptos explicados hasta ahora, como el constructor y los métodos/funciones del objeto.