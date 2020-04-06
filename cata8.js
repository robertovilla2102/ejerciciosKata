// reversed strings
function solution(str) {
  return str.split('').reverse().join('')
}

//noobCode 01: SUPERSIZE ME.... or rather, this integer!
function superSize(num) {
  let p = num.toString().split('')

  let q = p.sort(function (a, b) { return a - b; }).reverse().join('')

  return parseInt(q)
}

//Grasshopper - Check for factor
function checkForFactor(base, factor) {
  return base % factor === 0 ? true : false
}

//Grasshopper - Messi goals function
const goals = (...a) => a.reduce((s, v) => s + v, 0)

//All Star Code Challenge #18
function strCount(str, letter) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) count++
  }
  return count
}

//Expressions Matter
function expressionMatter(a, b, c) {
  let first = a * (b + c)
  let two = a * b * c
  let tres = a + (b * c)
  let cuatro = (a + b) * c
  let cinco = (a * b) + c
  let seis = a + b + c

  return Math.max(first, two, tres, cuatro, cinco, seis)
}

//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if (n < 1 || m < 1) return 0
  return n * m
}
