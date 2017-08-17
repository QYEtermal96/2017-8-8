function main(number){
    let string = "";
    let num = number
    for (var i = 2; i < number; i++) {
      while( num%i ===0 ){
          console.log(i);
          string += i.toString();
          num = num/i;
      }
    }
    return string;
}

module.exports = main;
