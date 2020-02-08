// kata5 Regex Password Validation
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

//Human Readable Time
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
var solution = function(firstArray, secondArray) {
    let resu = []  

    for (let i = 0; i < firstArray.length; i++) {
        if(firstArray[i] != secondArray[i]){
            resu.push(Math.pow(secondArray[i] - firstArray[i],2))
        }
        else{
            resu.push(1)
        }
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const largo = resu.length
    return resu.reduce(reducer)/largo
}