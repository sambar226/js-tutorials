let name="Sameer" // method 1

let repoCount=50
// console.log(name+repoCount);   this is old type of concatenating

// new way uses backticks ` ` for string interpolation
console.log(`My name is ${name} and my repo count is ${repoCount}`); 

//Method 2--
let accountName= new String('Sameer.dev')  //another way of declaring string , nothing new the method 1 is also indirectly calling String() object
// advantage of using method 2  is it giving alot more options to manipulate string with buit in extra functions

console.log(accountName.__proto__); // this will return prototypes availabe for this string . you can see it more clearly in any browser's console tab
console.log(accountName.toLowerCase());
console.log(accountName.charAt(5));
console.log(accountName.indexOf('d'));
const newString= accountName.substring(0,4) // 4th index char will not be printed
console.log(newString);
// accountName.substring(-8,4)   substring will ignore -ve values and will start from 0 and give same output as of (0,4)
console.log(accountName.slice(-9,7)); // by slice you can put -ve values too to print it in reverse order
const newStringOne= "   Sameer  " 
// const newStringOne= "   Sameer  .dev"  Output:Sameer  .dev as trim() does not remove any middle whitespaces
console.log(newStringOne);
console.log(newStringOne.trim()); // used for removing starting and end whitespaces

const url="https://sameer.com/sameer%20barve"
console.log(url.replace('%20','-'));

console.log(url.includes('sam')); // boolean return to check if specific char is in string or not

const testString="sameer-dev-barve-22"
console.log(testString.split('-')); // returns array of splitted words , we can also put limit on it 

console.log(testString.at(-10));
// console.log(testString.charAt(-10));no output as charAt() can't handle -ve index

console.log(testString.charCodeAt(0)); // will return UTF-16 unicode and value will range from 0 to 65535
console.log(testString.codePointAt(0)); // will return unicodes which are more than 0XFFFF (65535)

console.log(testString.endsWith('eer',6)); // its not index but a position starting from 1 not like indexes starting from 0

const paragraph="I think Ruth's dog is cuter than your dog and more healthy!"
const search="dog";
const indexOfFirst=paragraph.indexOf(search);
console.log(`The position of first ${search} in para is ${indexOfFirst}`);// this will return index of first char of that word you are finding

console.log(`The position of second ${search} in para is ${paragraph.indexOf(search,indexOfFirst+1)}`); // getting position of 

const para2="I think Ruth's dog is cuter than your dog and more healthy but not more that Sameer's dog , lets not discuss it!"

console.log(para2.lastIndexOf('dog')); // returns index of last occurance of the specified substring
// we can also add position of it too , it will check till index+! less than or equal to
console.log(para2.lastIndexOf('dog',10)); 





