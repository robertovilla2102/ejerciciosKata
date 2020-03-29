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
