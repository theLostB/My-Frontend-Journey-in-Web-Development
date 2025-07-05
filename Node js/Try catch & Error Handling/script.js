let a = prompt("Enter First Number: ")
let b = prompt("Enter Second Number: ")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)

//try {
//console.log("Sum total of these Numbers are ", sum*x);
//} catch (e) {
//    console.log("Error aa gya bhaii");
//}
function main(){
    x=1;
    try {
    console.log("Sum total of these Numbers are ", sum*x);
    return true;
    } catch (e) {
        console.log("Error aa gya bhaii");
        return false
    }
    finally{
        console.log("Files are being closed and db connection is being out");
    }
}
let c = main()