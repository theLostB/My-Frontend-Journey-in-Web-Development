const student = {
    fullName: "Shradha Khapra",
    marks: 94.4,
    printMarks: function (){
        console.log("marks: ", this.marks) // this.marks = student.marks
    },
}
const employee = {
    calcTax (){
        console.log("Tax rate is 10%")
    },
}
const karanArjun = {
    salary: 50000,
}
karanArjun.__proto__ = employee 

class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner")
let lexus = new ToyotaCar();
lexus.setBrand("lexus")