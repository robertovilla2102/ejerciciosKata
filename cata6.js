function calculateDamage(yourType, opponentType, attack, defense){
    let types = {
      fire : (ot) => {
        if(ot === 'grass') return 2
        if(ot === 'water') return 0.5
        if(ot === 'electric') return 1
        if(ot === 'fire') return 0.5
  
      },
  
      grass : (ot) => {
        if(ot === 'fire') return 0.5
        if(ot === 'water') return 2
        if(ot === 'electric') return 1
        if(ot === 'grass') return 0.5
  
      },
  
      electric : (ot) => {
        if(ot === 'fire') return 1
        if(ot === 'water') return 2
        if(ot === 'grass') return 1
        if(ot === 'electric') return 0.5
      },
  
      water : (ot) => {
        if(ot === 'fire') return 2
        if(ot === 'grass') return 0.5
        if(ot === 'electric') return 0.5
        if(ot === 'water') return 0.5
      }
  
    }
  
    let efec = types[yourType](opponentType)
  
    let damage = (50 * attack / defense) * efec
    return damage
  }


function parse( data ){
  let arrFinal = []
  let resu = 0
  for (let i = 0; i < data.length; i++) {
    if(data[i] === 'i')(resu +=1)
    if(data[i] === 'd')(resu -=1)
    if(data[i] === 's')(resu = resu*resu)
    if(data[i] === 'o')(arrFinal.push(resu))
  }

  return arrFinal
}


function array_diff(a, b) {
  let arr = []
  if(b = []){return a}
  
  for (let i = 0; i < a.length; i++) {
    if(a[i] === b[i]){a.slice()}
    
  }
  return arr
}


function blocks(s) {
  let p = s.split('')
  p.sort()

  for (let i = 0; i < p.length; p++) {
    if(p[i] === p[i+1] && p[i+1] != undefined){
      let eliminado = p[i].shift()
      p.push(eliminado)
    }
  }

  return p

}

//Create Phone Number 
function createPhoneNumber(numbers){
  let pepe = numbers.join('')
  return '(' + pepe[0] + pepe[1] + pepe[2] + ') ' + pepe[3] + pepe[4] + pepe[5] + '-' + pepe[6] + pepe[7] + pepe[8] + pepe[9]
}

//
function maxProduct(numbers, size){
  let resu = 1
  let pepe = 1

  for (let i = 0; i < numbers.length; i++) {
    for (let j=i+1; j < numbers.length; j++) {
      pepe = numbers[i]* numbers[j]
      if(pepe > resu){resu = pepe}
    }
  }

  return resu
}

[4,3,5], 2, 20