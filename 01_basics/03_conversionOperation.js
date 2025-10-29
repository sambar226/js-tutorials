let score = "33abc"

//console.log(typeof score);  //this will give you string

//let valueInNum = Number(score)
//console.log(typeof valueInNum); // this will give you Number
//console.log(valueInNum);  // but the value stored here is Nan: Not a Number . So this is one issue of  JS
/*
"33" => 33
"33abc" => NaN
null => 0
undefined => NaN
true => 1 , false => 0
for changing into Boolean 
1 => true, 0=> false
"sam"=> true
""=> false
*/


let score2 = false;

//console.log(typeof score2);  //this will give you string

let valueInStr = String(score2)
//console.log(typeof valueInStr); 
//console.log(valueInStr);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+1); // if first is strinf then JS will treat rest of them as string and concatenate || Output: 121
console.log(1+2+"1"); //if first is number then it will do the operation first and then concatenate it with string || Output: 31
console.log(+true); // out put : 1 // + is loosely used for conversion too
//console.log(true+); // will throw an error
// console.log(+""); output: 0

 

     



