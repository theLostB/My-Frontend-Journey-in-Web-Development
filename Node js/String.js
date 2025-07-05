console.log("This is string tutorial!")
let a = "Harry";
console.log(a)
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
for (let i = 0; i <= 4; i++) {
    console.log(a[i])
}
console.log(a.length)
let b = "Rohan"
console.log("His name is " + a + " and his friend name is " + b)
console.log(`His name is ${a} and his friend name is ${b}`) //This is callef template literals this is similar to f-string of python

console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(1, 4))
console.log(b.slice(1))
console.log(b.slice(-1))
console.log(b.replace("Ro", "77"))
console.log(b.concat(a, "Aishwarya", "Rahul", "Priya"))
console.log(b.charAt(2))
console.log(b.indexOf("ha"))
console.log(b.startsWith("Ro"))
console.log(b.endsWith("an"))