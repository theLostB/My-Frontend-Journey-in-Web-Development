console.log("Harry is a Hacker!")
console.log("Rohan is a Hecker!")

setTimeout(() => {
    console.log("I m in setTimeout")
}, 2000);
console.log("The End")

// Above example shows the asynchronous nature of javascript


const fn = () => {
    console.log("nothing")
}
const callback = (arg, fn) => {
    console.log(arg)
    fn()
}
const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.js/ajax/libs/prism/9000.0.1/prism.nin.js", callback)