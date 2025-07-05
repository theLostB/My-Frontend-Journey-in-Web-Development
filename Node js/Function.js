//Function

console.log("Hey! We learn function in this tutorial")
function nice(name) {
  console.log("Hey "+name+" you are nice! ");
  console.log("Hey "+name+" you are good! ");
  console.log("Hey "+name+" your tshirt is nice! ");
  console.log("Hey "+name+" your course is too good!");
}
nice("Harry")
function sum(a, b) {
  console.log("Your sum is "+(a+b));
}
sum(3,5)
function into(a, b) {
  return a*b //If we want to return value we can use return keyword
}
result = into(4, 5)
console.log("The Multiplication of this Numbers is "+result)

//Arrow Function

const func1 = (x)=>{
  console.log("I am an arrow function "+x)
}
//Arrow function can be stored in variable 
func1(63)