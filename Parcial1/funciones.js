// Funciones 


// Clásicas
function habla(nombre){
  return 'Hola, ' + nombre;
}


// Arrow
const hablaflecha = (nombre) => 'Hola, ' + nombre;


// Lista

let cosas = ['lluvia', 'papel', 'cobija', 'calabaza', 'mariposa', 'canción', 'lentes'];

cosas.push('canela');
cosas.push('piedra');
cosas.pop()

cosas.unshift('presagio');
cosas.shift();

let resumen = cosas.slice(1,3);
let honor = resumen.splice(2,1,'cancion');

let mapa = cosas.map()
const frutas = cosas.filter(cosa => cosa.length > 5);
console.log(cosas);
console.log(resumen);
console.log(honor);




