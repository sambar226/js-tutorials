// there are two types of memory|| Stack and Heap
//  Stack memory is used for premitive data types ( number, string, boolean etc)
// Heap memory is used for non-premitive data types(arrays, function etc)
//while using stack memory , you get copy of the data
//but in heap memory, you get a reference of the original value
let youtubeName="Sameer.dev"
let anotherName=youtubeName  
anotherName="Sameer learns"  // as you can see as it was a copy of youtubename value , this line does not change the value of another variable
console.log(youtubeName);
console.log(anotherName);

//////////////for heap
let user1={
    email:"sameerdev.com",
    pwd:"same11"
}
let user2=user1
user2.pwd="ssssdsss"
console.log(user1.pwd);  // both will return value ssssdsss because original value is changed in heap
console.log(user2.pwd);

