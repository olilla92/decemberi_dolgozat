//számdarabolás
function createArrayOfTiers(num) {
    let tomb = []
    
    for (let i = 0; i < num.length; i++){
      tomb.push(num)
    }
    for (let i = 0; i < tomb.length; i++){
      
    }
  }    

  //óra perc
  function timeConvert(num) { 
    let ora = []
     
    if (num <= 0){
      return "00:00"
    }
    else{
      if (num < 10){
        return "00:0"+num
      }
      else if (num < 60){
        return "00:"+num
      }
      else if (num >= 60){
        let ora = num / 60 * 1000 
        
        for (let i = 0; i < ora.length; i++){
          ora = ora.split(ora[1])
          return "0"+ora[i]+":"+num
        }
      }
    }
    
  }


//háromszög
  function isTriangle(a,b,c)
{
  if ((a + b) > c || (a + c) > b || (c + b) > a){
    return true
  }
  else if (a == 0 || b == 0 || c == 0){
    return false
  }
  else{
    return false
  }
}

//szám eltakarás
function maskify(cc) {
    let szam = []
    for (let i = 0; i < cc.length; i++){
      szam.push(cc)
    }
    for (let i = 0; i < szam.length; i++){
      if ((szam.length - 4) > i){
        return szam.replace(szam[i], "#")
      }
    }
  }
  