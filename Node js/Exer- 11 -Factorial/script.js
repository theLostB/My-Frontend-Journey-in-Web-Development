let a = 6;
function factorial(number) {
    let arr = Array.from(Array(number+1).keys());
    console.log(arr.slice(1,));
    let c = arr.slice(1,).reduce((a, b) => {
        return a*b;
    });
    console.log(c);
}
factorial(a);

function facfor(number) {
    let fac = 1;
    for (let i = 1; i <= number; i++) {
        fac = fac*i;
    }
    return fac;
}
console.log(facfor(a));