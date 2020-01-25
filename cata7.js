function infected(n){
    let infecetados = 0
    let arr2 = n.split('X')
    let ver = n.split('')
    let hab = 0
  
    for (let i = 0; i < ver.length; i++) {
      if(ver[i] === '0' || ver[i]=== '1'){hab++}
    }
  
    if(hab===0) {return hab}
  
      for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2[i].length; j++) {
          if(arr2[i][j] === '1'){
            arr2[i] = arr2[i].replace(/0/g,"1")  
            break;
          }
        }
      }
      arr2 = arr2.join('')
  
      for (let i = 0; i < arr2.length; i++) {
        if(arr2[i] === '1'){infecetados++}
      }
  
      let resu = 100*infecetados/arr2.length
      resu = parseFloat(resu)
  
      return resu
  }