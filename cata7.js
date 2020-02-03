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

  console.log(number)
  console.log(resuA, resuB)

  if (resuA == resuB) { return "Balanced" }

  return "Not Balanced"
}

// Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

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


