// Ejercicio REACTO : https://repl.it/@guilleasz/findNeedle

const encontar = (palabra, otra) => {
    const existe = palabra.includes(otra)
    if (!existe) return -1

    for (let j = 0; j < palabra.length; j++) {
        for (let i = 0; i < otra.length; i++) {
            if (otra[i] !== palabra[j + i]) break
            if (i + 1 === otra.length) return j;
        }
    }
}

const findNeedle = (haystack, needle) => {
    // iteramos sobre el haystack
    for (let haystackIndex = 0; haystackIndex < haystack.length; haystackIndex += 1) {
        // comenzamos a iterar sobre el needle
        for (let needleIndex = 0; needleIndex < needle.length; needleIndex += 1) {
            // comparamos la letra del needle en la que estamos con la letra del haystack
            // cuando no hay match cortamos de comparar el needle
            if (haystack[haystackIndex + needleIndex] !== needle[needleIndex]) break;
            // si terminamos de recorrer la needle devolvemos el haystackIndex
            if (needleIndex + 1 === needle.length) return haystackIndex;
        }
    }
    // una vez que termina el loop devolvemos -1
    return -1;
}

//sumArray
//* https://repl.it/@guilleasz/sumArray
const sumArray = (arr, n) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === n) return true
        }

    }

    return false
}

const sumArray2 = (arr, n) => {
    let start = 0
    let end = arr.length - 1

    while (start < end) {
        let sum = arr[start] + arr[end]
        if (sum === n) return true
        else if (sum < n) start++
        else end--
    }

    return false
}

//ejercicio 3 REACTO
/* 
const stack = [50, 48, 20, 30]
const stack = [2, 48, 20, 100]
const resu = -2 */

const ejercicio = (arr) => {
    let resu = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let parcial = arr[j] - arr[i]
            if (parcial && parcial > resu) {
                resu = parcial
            }
        }
    }

    return resu
}

const ejercicio2 = (arr) => {
    let max = arr[1] - arr[0]
    let min = arr[0]

    for (let i = 1; i < arr.length; i++) {
        let parcial = arr[i] - min
        min = Math.min(min, arr[i])
        max = Math.max(parcial, max)
    }

    return max
}

//reacto 30/03
/*
{()[]} verdadero
{}([)] falso
{([(){}])} verdadero
({}{()}[) falso
{]({(){}[]}) falso
*/
const buscador = (string) => {
    let parents = { '{': '}', '[': ']', '(': ')' }
    let arr = []
    for (let i = 0; i < string.length; i++) {
        if (Object.keys(parents).includes(string[i])) arr.push(string[i])
        else if (parents[arr.pop()] != string[i]) return false
    }

    return true
}


/**
Escribe una función que determine si una conexion existe entre dos vertices de un graph. El graph sera representado como un
objeto, cada key representa un vértice y el valor todos los vertices que pueden ser alcanzados.
*/

const graph = {
    a: ['c'],
    b: ['c'],
    c: ['s', 'r'],
    d: ['a'],
    s: ['a', 'c'],
    r: ['d'],
    z: ['z']
};

const searchPath = (graph, start, end, help = {}) => {
    if (help[start]) return false
    help[start] = true

    for (let i = 0; i < graph[start].length; i++) {
        if (end === graph[start][i]) return true
        else if (searchPath(graph, graph[start][i], end, help)) return true
    }

    return false
}
/* searchPath(graph, 'c', 'z') */