// Funciones de Python traducidas a JavaScript
// Tania Mendoza González

//1)
// Imprime cadena de saludo
// in: nombre (string)
// out: "Hola, " + nombre + "! Bienvenido al curso de programación.

function saludar_usuario(nombre){
    return "Hola, " + nombre + "! Bienvenido al curso de programación.";
}


// 2)
// Devuelve una cadena repetida 'veces' veces, separada por espacios.
// in: texto (string), veces (int)
// out: cadena repetida

function repetir_texto(texto, veces){
    return texto*veces;
}


// 3)
// Devuelve palabra al revez
// in: palabra (string)
// out: palabra invertida
function invertir_palabra(palabra){
    return palabra.split("").reverse().join("");

}

// 4)
// Devuelve el número de vocales en un texto
// in: texto (string)
// out: número de vocales (int)
function contar_vocales(texto){
    let cont = 0;
    let vocales = "aeiou";
    for (let i=0; i<texto.length; i++){
        if(vocales.includes(texto.charAt(i).toLower())){
            cont += 1;
        }
    }
    return cont;
}

// 5)
// Devuelve el texto en mayúsculas y minúsculas
// in: texto (string)
// out: [texto en minúsculas, texto en mayúsculas] (arreglo)

function mayusculas_y_minusculas(texto){
    min = texto.toLower();
    max = texto.toUpper();
    return([min,max]);
}

// 6)
// Calcula promedio de lista de números
// in: lista de floats
// out: promedio (float)

function mayusculas_y_minusculas(lista){
    let suma = 0;
    let n = lista.length();
    for(let i=0; i<n; i++){
        suma += lista[i];
    }
    return suma/n;
}


// 7)
// Devuelve el máximo y el mínimo de una lista
// in: lista de enteros
// out: [maximo, minimo] (tupla)

function maximo_y_minimo(lista){
     let min = lista[0];
     let max = min;
     for (let i=0; i<lista.length(); i++){
        if(lista[i]<min){
            min == lista[i];
        }
        else if(lista[i]>max){
            max == lista[i];
        }
     }

     return [max, min];
}

// 8)
// Devuelve números pares de una lista
// in: lista de enteros
// out: lista de numeros pares

function filtrar_pares(lista){
    for (let i=0; i<lista.length(); i++){
        n = lista[i]%2;
        if(n != 0){
            lista.delete(0,1);
        }
    }
    return lista;
}


// 9)
// Devuelve elementos de una lista en una sola frase
// in: lista de strings
// out: string

function sumar_elementos_texto(lista_textos){
    let concat = lista_textos.join(" ");
    return concat;

}

// 10)
// Verifica si un elemento está en una lista
// in: lista de strings, elemento (string)
// out: true o false
function buscar_elemento(lista, elemento){
    let res = false;
    if(elemento in lista){
        res = true;
    }
    return res;
}


// 11) 
// Cuenta el número de palabras en una frase 
// in: frase (string)
// out: numero de palabras (int)
function contar_palabras(frase){
    return lengthOf(frase.split(" "));
}


// 12)
// Duplica cada elemento de una lista
// in: lista
// out: lista con elementos duplicados
function duplicar_elementos(lista){
    return lista.map(numero => numero*2)
}

// 13)
// Capitaliza la primera letra de cada palabra
// in: frase (string)
// out: frase (string)
function capitalizar_palabras(frase){
    let arreglo = frase.split(" ")
    arreglo = arreglo.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1) )
    arreglo = arreglo.join(" ")
    return arreglo
}