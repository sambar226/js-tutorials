//Problem comes where you don't use numbers of same data type for comparison
// console.log("2">1);  Output: true
// console.log("02">1);  Output: true

console.log(null>0);  //output: false  the reason is comparison operators (<,>)
console.log(null==0); //output: false  convert null to 0 , thats why null>=0 is    true and equality does not 
console.log(null>=0); //output: true

console.log("2"==2); // returns true because it converts string in number 
console.log("2"===2);//  but this return false because we have used "===" strict check which checks not only value but also data type









