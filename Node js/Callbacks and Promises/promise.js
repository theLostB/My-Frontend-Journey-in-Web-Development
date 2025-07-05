console.log("I m Promise!");

const prom1 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if (a<0.5) {
        reject("No random value supporting you!");
    }
    else {
        setTimeout(()=>{
            console.log("Yes I m done");
            resolve("Harry")
        }, 3000);
    }
});
prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

const prom2 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if (a<0.5) {
        reject("No random value supporting you! 2");
    }
    else {
        setTimeout(()=>{
            console.log("Yes I m done 2");
            resolve("Harry 2")
        }, 1000);
    }
});

let p3 = Promise.all([prom1, prom2])
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

let p4 = Promise.allSettled([prom1, prom2])
p4.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

let p5 = Promise.race([prom1, prom2])
p5.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})