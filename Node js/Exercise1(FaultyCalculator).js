let random = Math.random()
let a = prompt("Enter the first number:")
let b = prompt("Enter the Operation:")
let c = prompt("Enter the second number:")

console.log(random)

let obj = {
	"+": "-",
	"*": "+",
	"-": "/",
	"/": "**"
}
if(random>1.0){
	alert(`The result is: ${eval(`${a} ${b} ${c}`)}`)
}
else{
	b = obj[b]
	alert(`The result is: ${eval(`${a} ${b} ${c}`)}`)
}