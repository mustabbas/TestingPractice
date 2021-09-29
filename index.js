//Task 1 
function stringLength(str) {
    if (str.length >= 1 && str.length <= 10) {
        return str.length ; 
    }else{
        throw new Error('character long  not in range');
    }
       
}

//Task 2
function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

//Task 3
class calculator {
   constructor (a,b){
      this.a = a,
      this.b = b
   }
   add(){
       return this.a + this.b;
   }
   subtract(){
    return this.a - this.b;
   }
   divide(){
    return this.a / this.b;
   }
   multiply(){
    return this.a * this.b;
   }
}

//Task 4
function capitalize(str) {
   return str.charAt(0).toUpperCase() + str.slice(1);
}


module.exports = {stringLength,reverseString,calculator,capitalize};