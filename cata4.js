//Sum Strings as Numbers
function sumStrings(a, b) {
    let num1 = a.replace(/^0*/g, "").split("").reverse()
    let num2 = b.replace(/^0*/g, "").split("").reverse()
    let spillOver = 0
    let contador = 0
    let sum = ""

    while (contador < num1.length || contador < num2.length) {
        let sumaParcial = (parseInt(num1[contador]) || 0) + (parseInt(num2[contador]) || 0) + spillOver
        if (sumaParcial > 9) {
            sum = `${sumaParcial - 10}` + sum
            spillOver = 1
        } else {
            sum = `${sumaParcial}` + sum
            spillOver = 0
        }
        contador++
    }
    return spillOver ? `1${sum}` : sum
}
