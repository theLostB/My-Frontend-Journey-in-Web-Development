let arr = [1,28,3,4,15,572,6,791];
let newArr = [];
//for (let index = 0; index < arr.length; index++) {
//    const element = arr[index];
//    newArr.push(element**2)
//}
//console.log(newArr);
//For doing the above thing in short code we use map 
let newar = arr.map((e)=>{
  return e** 2;
})
const greaterthanseven = (e)=>{
    if(e>7){
        return true
    }
    else{
        return false
    }
}
console.log(arr.filter(greaterthanseven))
let arr2 = [1,2,3,4,5,6];
const red = (a,b) => {
    return a*b
}
console.log(arr2.reduce(red))
console.log(Array.from("Harry"))