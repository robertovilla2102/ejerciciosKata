//* kata5 Regex Password Validation
function validate(password) {
    let mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let minus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    let pepe = password.split('')
    let ma = 0
    let mi = 0
    let nu = 0

    for (let i = 0; i < pepe.length; i++) {
        for (let j = 0; j < mayus.length; j++) {
            if (pepe[i] == mayus[j]) {
                ma += 1
                break
            }
            if (pepe[i] == minus[j]) {
                mi += 1
                break
            }
            if (pepe[i] == num[j]) {
                nu += 1
                break
            }
        }
    }

    if (ma > 0 && mi > 0 && nu > 0 && (ma + mi + nu === password.length) && password.length > 5) {
        return true
    }
    return false
}

//TODO Human Readable Time
function humanReadable(seconds) {
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = seconds % 60;

    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    if (h <= 9) {
        var result = '0' + h + ":" + m + ":" + s;
        return result
    }

    var result = h + ":" + m + ":" + s;
    return result
}

//Valid Parentheses
function validParentheses(parens) {
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }

    return n == 0;
}

//Interleaving Arrays -- pwndinete
function interleave() {
    let args = [...arguments]
    let resu = []
    console.log(args)

}

//Mean Square Error
const solution = function (firstArray, secondArray) {
    let resu = []

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] != secondArray[i]) {
            resu.push(Math.pow(secondArray[i] - firstArray[i], 2))
        }
        else {
            resu.push(1)
        }
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const largo = resu.length
    return resu.reduce(reducer) / largo
}

//ROT13
function rot13(str) {
    let resu = []
    let cont = 0

    let mayus = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let rot = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < mayus.length; j++) {
            if (str[i] == mayus[j]) {
                cont++
                resu.push(rot[j])
                break
            } else if (str[i] == mayus[j].toLowerCase()) {
                cont++
                resu.push(rot[j].toLowerCase())
            }
        }
        if (cont == 0) { resu.push(str[i]) }
        cont = 0
    }

    return resu.join('')
}

//Josephus Permutation
function josephus(items, k) {
    let n = items[items.length - 1]
    let queue = []
    let deathOrder = []

    for (let i = 1; i <= n; i++) {
        queue.push(i)
    }

    while (queue.length !== 1) {
        for (let skip = 1; skip < k; skip++) {
            queue.push(queue.shift());
        }

        deathOrder.push(queue.shift());
    }
    deathOrder.push(queue[0])
    return deathOrder
}

//Detect Pangram
function isPangram(string) {
    let arr = string.split(' ').join('').toLowerCase()
    let minus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (let i = 0; i < minus.length; i++) {
        if (!arr.includes(minus[i])) return false
    }

    return true
}

//Rot13
function rot13(message) {
    let resu = ''
    let obj = {
        'a': 'n',
        'b': 'o',
        'c': 'p',
        'd': 'q',
        'e': 'r',
        'f': 's',
        'g': 't',
        'h': 'u',
        'i': 'v',
        'j': 'w',
        'k': 'x',
        'l': 'y',
        'm': 'z',
        'n': 'a',
        'o': 'b',
        'p': 'c',
        'q': 'd',
        'r': 'e',
        's': 'f',
        't': 'g',
        'u': 'h',
        'v': 'i',
        'w': 'j',
        'x': 'k',
        'y': 'l',
        'z': 'm'
    }

    for (let i = 0; i < message.length; i++) {
        if (obj[message[i]]) resu += obj[message[i]]
        else if (!obj[message[i]] && obj[message[i].toLowerCase()]) resu += obj[message[i].toLowerCase()].toUpperCase()
        else { resu += message[i] }
    }

    return resu

    //**************************** forma copada de codewars ***************************** */
    function rot13(message) {
        var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
        return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
    }
    //********************************************************* */
}

//Largest product in a series
function greatestProduct(input) {
    let resu = 0
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] && input[j + 1] && input[j + 2] && input[j + 3] && input[j + 4]) {
                let parcial = parseInt(input[j]) * parseInt(input[j + 1]) * parseInt(input[j + 2]) * parseInt(input[j + 3]) * parseInt(input[j + 4])
                if (parcial > resu) resu = parcial
            }
        }
    }

    return resu
}

