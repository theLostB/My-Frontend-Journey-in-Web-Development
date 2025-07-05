console.log("script.js is initialising...");

//Fetch API


//Here we are sending get request on server and fetching data in json format from it

async function getData(){
    let x = await fetch('jsonplaceholder.typicode.com/todos/1')
    let data = x.json()
    return data
}


//Here we are sending post request on server and fetching data in json format from it

async function getData2(){
    let x2 = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
        })
    let data = await x2.json() 
    return data
}

//Async Await

//Simulate getting data from a server
//async function getData(){
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//))         }, 3500);
//     })
//}
async function main(){
    console.log("loading modules...");
console.log("doing something else...");
console.log("load data...");
let data = await getData()
console.log(data)
console.log("process data...");
}
main();
//console.log("loading modules...");
//console.log("doing something else...");
//console.log("load data...");
//let data = getData()
//data.then((v)=>{
//console.log(data)
//console.log("process data...")
//})