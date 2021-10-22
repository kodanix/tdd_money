function hello(a) {
    megoldas = ""
    if(a.length == 0){
      return "Hello, my friend."
    }else if(a.length == 1 && a[0]==a[0].toUpperCase()){
      return "HELLO " + a[0] + "!"
    }else if(a.length == 1){
      return "Hello, " + a[0] + "."
    }else if(a.length > 1){
      hasupper = false
      hascomma = false
      b = []
      uppercase = []
      for(let i = 0; i < a.length; i++){
        if(a[i] == a[i].toUpperCase()){
          hasupper = true
          uppercase.push(a[i]);
          a.splice(i, 1)
          if(a[i].includes(",")){
            for(let k = 0; k < a[i].split(',').length; k++){
                b.push(a[i]);
            }
          }else{
              b.push(a[i]);
          }
        }else{
            if(a[i].includes(",")){
              hascomma = true
                for(let k = 0; k < a[i].split(',').length; k++){
                    b.push( a[i].split(',')[k]);
                }
              }else{
                  b.push(a[i]);
            }
        }
      }
      if(b.length > 0){
          a = b;
      }
      if(hascomma){
        megoldas = "Hello, "
        for(let i = 0; i < a.length; i++){
          if(i==a.length-1){
            megoldas += ", and" + a[i] + "."
          }else{
            if(i==a.length-2){
              megoldas += a[i]
            }else{
              megoldas += a[i] + ", "
            }
          }
        }
        return megoldas
      }
      if(hasupper){
        megoldas = "Hello, "
        for(let i = 0; i < a.length; i++){
          if(i==a.length-1){
            megoldas += "and " + a[i] + ". "
          }else{
            megoldas += a[i] + ", "
          }
        }
        megoldas += "AND HELLO "
        for(let i = 0; i < uppercase.length; i++){
          if(i==uppercase.length-1){
            megoldas += "AND " + uppercase[i] + "!"
          }else{
            megoldas += uppercase[i] + ", "
          }
        }
        return megoldas
      }
      if(!hasupper){
        megoldas = "Hello, "
        for(let i = 0; i < a.length; i++){
          if(i==a.length-1){
            megoldas += " and " + a[i] + "."
          }else{
            if(i==a.length-2){
              megoldas += a[i]
            }else{
              megoldas += a[i] + ", "
            }
          }
        }
        return megoldas
      }
    }
    return 0;
  }

module.exports = hello;
