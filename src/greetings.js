function textMaker(param, isShouting){
  let result = '';
  let and = 'and ';
  let hello = 'Hello, ';
  let dot = '.';
  if(isShouting){
      and = 'AND ';
      hello = 'HELLO ';
      dot = '!';
  }

  if(param.length === 1){
      result = param[0];
  }else if(param.length > 1){
      let temp = '';
      for(let i = 0; i < param.length; i++){
          switch(i){
              case(param.length-2) : {
                  temp += (param[i] + ', ' + and);
                  break;
              }
              case(param.length-1) : {
                  temp += (param[i]);
                  break;
              }
              default: {
                  temp += (param[i] + ', ');
                  break;
              }
          }
      }
      result += temp;
 }

  return hello + result + dot;
}


function hello(param) {
  let lowercase = [];
  let uppercase = [];
  let temp = [];

  //check for commas
  for(let i = 0; i < param.length; i++){
      if(param[i].includes(',')){
          for(let k = 0; k < param[i].split(',').length; k++){
              temp.push(param[i].split(',')[k].trim())
          }
      }else{
          temp.push(param[i]);
      }
  }
  param = temp;

  //uppercase and lowercase names as arrays
  for(let i = 0; i < param.length; i++){
      if(param[i] === param[i].toUpperCase()){
          uppercase.push(param[i]);
      }else{
          lowercase.push(param[i]);
      }
  }

  if(lowercase.length === 0 && uppercase.length === 0){
      return 'Hello, my friend.';
  }else if(lowercase.length > 0 && uppercase.length === 0){
      return textMaker(lowercase, false);
  }else if(uppercase.length > 0 && lowercase.length === 0){
      return textMaker(uppercase, true);
  }else if(lowercase.length > 0 && uppercase.length > 0){
      return  textMaker(lowercase, false) + " AND " + textMaker(uppercase, true);
  }
}

module.exports = hello;
