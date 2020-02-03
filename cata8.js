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