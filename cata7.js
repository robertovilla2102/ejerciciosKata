function infected(n) {
  let infecetados = 0
  let arr2 = n.split('X')
  let ver = n.split('')
  let hab = 0

  for (let i = 0; i < ver.length; i++) {
    if (ver[i] === '0' || ver[i] === '1') { hab++ }
  }

  if (hab === 0) { return hab }

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
      if (arr2[i][j] === '1') {
        arr2[i] = arr2[i].replace(/0/g, "1")
        break;
      }
    }
  }

  arr2 = arr2.join('')

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === '1') { infecetados++ }
  }
  let resu = 100 * infecetados / arr2.length
  resu = parseFloat(resu)
  return resu
}

// Disemvowel Trolls
function disemvowel(str) {
  let arr = str.split('')
  let vocales = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
      if (arr[i].toLowerCase() == vocales[j]) {
        arr.splice(i, 1)
        i--
      }
    }
  }
  return arr.join('')
}


//Balanced Number (Special Numbers Series #1 )
function balancedNum(number) {
  number = number.toString().split('')

  if (number.length === 1) { return 'Balanced' }

  let nA
  let nB

  if (number.length % 2 != 0) {
    nA = number.splice(0, ((number.length / 2)))
    nB = number.splice(((number.length / 2)))
  } else {
    nA = number.splice(0, (number.length / 2) - 1)
    nB = number.splice((number.length / 2))
  }

  resuA = 0
  resuB = 0

  for (let i = 0; i < nA.length; i++) {
    resuA += parseInt(nA[i])
    resuB += parseInt(nB[i])
  }

  if (resuA == resuB) { return "Balanced" }
  return "Not Balanced"
}

// Your task is to write an update for a lottery machine. 
function lottery(str) {
  let resu = []
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (str[i] == num[j]) {
        if (!resu.includes(str[i])) {
          resu.push(str[i])
        }
      }
    }
  }
  if (resu.length > 1) { return resu.join('') }
  return "One more run!"
}

//Remove duplicate words
function removeDuplicateWords(s) {
  let str = s.split(' ')
  const pepe = [...new Set(str)]
  return pepe.join(' ')
}

//Sort Out The Men From Boys
function menFromBoys(arr) {
  let arr = [...new Set(arr)]
  let pares = []
  let impares = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) { pares.push(arr[i]) }
    else { impares.push(arr[i]) }
  }

  pares.sort((a, b) => { return a - b })
  impares.sort((a, b) => { return a - b }).reverse()
  return pares.concat(impares)
}

//Scrabble Score
function scrabbleScore(str) {
  let p = str.split(' ').join('')
  let resu = 0
  for (let i = 0; i < p.length; i++) {
    resu += $dict[p[i].toUpperCase()]
  }
  return resu
}

//Help Bob count letters and digits.
function countLettersAndDigits(input) {
  let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  let minus = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  let cont = 0
  let arr = input.split('')

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < minus.length; j++) {
      if (input[i] == num[j] || (input[i]).toLowerCase() == minus[j]) {
        cont++
      }
    }
  }
  return cont
}

//No oddities here
function noOdds(values) {
  // con un filter tambien se hacia en un toque jaja
  let resu = []
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 == 0) { resu.push(values[i]) }
  }
  return resu
}

//Count the divisors of a number
function getDivisorsCnt(n) {
  let resu = []
  for (let i = 0; i < n; i++) {
    if (n % i == 0) { resu.push(i) }
  }
  return resu.length
}

//Extra Perfect Numbers (Special Numbers Series #7)
function extraPerfect(n) {
  let resu = []
  for (let i = 0; i <= n; i++) {
    if (i % 2 != 0) {
      resu.push(i)
    }
  }
  return resu
}

//Two Oldest Ages
function twoOldestAges(ages) {
  function compareNumbers(a, b) {
    return a - b;
  }

  const oldAges = ages.sort(function (a, b) {
    return a - b;
  });

  return [oldAges[0], oldAges[1]]
}

//it is even?
function testEven(n) {
  return n % 2 === 0
}

//Number of Decimal Digits
function digits(n) {
  return String(n).length
}