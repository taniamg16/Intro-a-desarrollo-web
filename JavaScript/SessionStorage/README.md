# Session Storage
Tania Mendoza González
| Introducción al Desarrollo Web

## Índice
- [Qué es Session Storage](#que-es-session-storage)
- [Propiedades](#propiedades)
- [Estructura](#estructura)
- [Requerimientos](#requerimientos)
- [Diferencias con Local Storage](#diferencias-con-local-storage)
- [Sintaxis](#sintaxis)
- [Ejemplo de gestión básica de datos en SessionStorage](#ejemplo)
- [Referencias](#referencias)


## Qué es Session Storage
Session Storage es una API de almacenamiento web en HTML5 que guarda datos de forma temporal en el navegador mientras la pestaña esté abierta. Suele usarse para guardar formularios temporales, resultados de búsqueda o estados de navegación.

## Propiedades
- Guarda datos de forma temporal en el navegador.
- La información se borra al cerrar la pestaña o ventana.
- Utiliza un formato clave-valor para guardar los datos.
- Solo admite strings --> se pueden convertir objetos con JSON.stringify().
- La información no se envía automáticamente al servidor.
- Se guarda en texto plano, por lo que no es segura para contraseñas o tokens.
- Aislamiento por dominio: solo accesible desde el mismo sitio web que la creó.
- Ideal para datos de sesión, como formularios, filtros o estados de navegación.
- No se sincroniza entre pestañas ni dispositivos.

## Estructura
Session Storage almacena la información en el navegador en formato clave-valor, similar a un objeto en JavaScript.
Cada elemento guardado tiene:

- Clave (key): el nombre con el que se identifica el dato.
- Valor (value): el contenido asociado a esa clave (solo puede ser texto).

Ejemplo:
```javascript
// Guardar un dato
sessionStorage.setItem("nombre", "Tania");

// Obtener un dato
let nombre = sessionStorage.getItem("nombre");
```
Todos los datos guardados permanecen activos solo mientras la pestaña o ventana esté abierta.

## Requerimientos
Session Storage requiere que el navegador sea compatible con HTML5 y que el sitio web se ejecute en un entorno seguro (HTTPS recomendado) para proteger los datos. Solo funciona en navegadores modernos y dentro del mismo dominio y pestaña, ya que no comparte información entre ventanas ni dispositivos. Además, se necesita acceso a JavaScript para manipular los datos mediante los métodos del objeto sessionStorage.


## Diferencias con Local Storage
La principal diferencia entre Session Storage y Local Storage es la duración de los datos almacenados. Mientras que Local Storage guarda la información de forma permanente hasta que se elimine manualmente, Session Storage conserva los datos solo durante la sesión activa del navegador. Esto significa que al cerrar la pestaña o ventana, toda la información se borra automáticamente, iniciando una nueva sesión al volver a abrir la página.


## Sintaxis
Session Storage permite guardar, leer y eliminar información temporal en el navegador durante la sesión activa. Como ya dijimos, los datos se almacenan en pares clave-valor y se borran al cerrar la pestaña o ventana. A continuación, mostraremos la sintaxis para cada propósito: 

### Guardar un dato
```javascript
sessionStorage.setItem("key", "value");
```
### Leer un dato
```javascript
let lastname = sessionStorage.getItem("key");
```
### Eliminar un dato
```javascript
sessionStorage.removeItem("key");
```
### Borrar todo
```javascript
sessionStorage.clear();
```

## Ejemplo de gestión básica de datos en SessionStorage
En esta carpeta, en el archivo de Operaciones.js se encuentra un código de JavaScript que sirve para hacer operaciones de inserción, eliminación, consultar si un dato existe o borrar cierta información con base en las reglas de SessionStorage.


## Referencias

W3Schools. (2025). Window sessionStorage Property. Recuperado el 11 de octubre de 2025 de https://www.w3schools.com/jsref/prop_win_sessionstorage.asp

MDN Web Docs. (s. f.). Window.sessionStorage - API web. Recuperado el 11 de octubre de 2025  de https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage