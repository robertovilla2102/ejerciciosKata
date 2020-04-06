function calculateDamage(yourType, opponentType, attack, defense) {
  let types = {
    fire: (ot) => {
      if (ot === 'grass') return 2
      if (ot === 'water') return 0.5
      if (ot === 'electric') return 1
      if (ot === 'fire') return 0.5
    },
    grass: (ot) => {
      if (ot === 'fire') return 0.5
      if (ot === 'water') return 2
      if (ot === 'electric') return 1
      if (ot === 'grass') return 0.5
    },
    electric: (ot) => {
      if (ot === 'fire') return 1
      if (ot === 'water') return 2
      if (ot === 'grass') return 1
      if (ot === 'electric') return 0.5
    },
    water: (ot) => {
      if (ot === 'fire') return 2
      if (ot === 'grass') return 0.5
      if (ot === 'electric') return 0.5
      if (ot === 'water') return 0.5
    }
  }

  let efec = types[yourType](opponentType)
  let damage = (50 * attack / defense) * efec
  return damage
}


const parse = (data) => {
  let arrFinal = []
  let resu = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'i') (resu += 1)
    if (data[i] === 'd') (resu -= 1)
    if (data[i] === 's') (resu = resu * resu)
    if (data[i] === 'o') (arrFinal.push(resu))
  }
  return arrFinal
}


function array_diff(a, b) {
  let arr = []
  if (b = []) { return a }
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) { a.slice() }
  }
  return arr
}

function blocks(s) {
  let p = s.split('')
  p.sort()
  for (let i = 0; i < p.length; p++) {
    if (p[i] === p[i + 1] && p[i + 1] != undefined) {
      let eliminado = p[i].shift()
      p.push(eliminado)
    }
  }
  return p
}

//Create Phone Number 
function createPhoneNumber(numbers) {
  let pepe = numbers.join('')
  return '(' + pepe[0] + pepe[1] + pepe[2] + ') ' + pepe[3] + pepe[4] + pepe[5] + '-' + pepe[6] + pepe[7] + pepe[8] + pepe[9]
}

//
function maxProduct(numbers, size) {
  let resu = 1
  let pepe = 1
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      pepe = numbers[i] * numbers[j]
      if (pepe > resu) { resu = pepe }
    }
  }
  return resu
}

// sums of parts
function partsSums(ls, final = [], parcial = 0) {
  if (ls.length === 0) { return final }
  for (let i = 0; i < ls.length; i++) {
    parcial += ls[i]
  }
  ls.shift()
  final.push(parcial)
  return partsSums(ls, final, parcial)
}

//Sum of Two Integers
function add(x, y) {
  return x + y
}

//Are they the "same"?
function comp(array1, array2) {
  if (array1 === null && array2 === null) return true
  let final = array1.map((e) => { return e * e })
  let p = final.sort((a, b) => { return a - b })
  let q = array2.sort((a, b) => { return a - b })
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) { return false }
  }
  return true
}


//Persistent Bugger.
function persistence(num, resu = 0) {
  num = num.toString().split('')
  if (num.length <= 1) return resu

  num = num.reduce((a, b) => {
    return a.toString() * b.toString()
  })
  resu++

  return persistence(num, resu)
}

//More Zeros than Ones
function moreZeros(s) {
  let resu = []
  let arr = s.split('')

  for (let i = 0; i < arr.length; i++) {
    let provisional = arr[i].charCodeAt(0).toString(2).split('')
    let a = 0
    let b = 0
    for (let j = 0; j < provisional.length; j++) {
      if (provisional[j] === '1') {
        a++
      } else {
        b++
      }
    }

    if (b > a) {
      resu.push(arr[i])
    }
  }

  let resufinal = [...new Set(resu)]
  return resufinal
}


//Delete occurrences of an element if it occurs more than n times
function deleteNth(arr, n) {
  let resu = []
  for (let i = 0; i < arr.length; i++) {
    if (resu.includes(arr[i])) {
      n--
    }
    resu.push(arr[i])

    if (n < 0) {
      break
    }
  }
  return resu
}

//Array.diff
const arrayDiff = (a, b) => {
  let resu = []
  a.map(a => {
    if (!b.includes(a)) resu.push(a)
  })

  return resu
}

//Basics 08: Find next higher number with same Bits (1's)
function nextHigher(n) {
  let binary = (n).toString(2)
  let resu = parseInt(binary, 2)

  const permutation = (current = '', str, response = []) => {
    const n = str.length
    if (!str.length && !response.includes(current)) { response.push(current) }
    for (let i = 0; i < n; i++) {
      permutation(current + str.charAt(i), str.substring(0, i) + str.substring(i + 1, n), response);
    }
    return response
  }

  const arr = permutation('', binary)
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i], 2) >= resu) resu = parseInt(arr[i], 2)
  }
  return resu
}

