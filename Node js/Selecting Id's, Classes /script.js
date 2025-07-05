console.log("Harry");
let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[3].style.backgroundColor = "green";
document.getElementById("red").style.backgroundColor = "red";
document.querySelector(".box").style.backgroundColor = "blue";
console.log(document.querySelectorAll(".box"))
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "orange";
})