let button = document.getElementById("btn");

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b> Yayy You are clicked Enjoy Your click!!</b>"
});
button.addEventListener("contextmenu", () => {
    alert('Please don't hack us by right click')
});
button.addEventListener("keydown", (e)=>{
    console.log(e);
});