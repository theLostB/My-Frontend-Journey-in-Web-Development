console.log(document.querySelector('.box').innerHTML)
console.log(document.querySelector('.box').innerText)
console.log(document.querySelector('.box').outerHTML)
console.log(document.querySelector('.container').innerHTML)
console.log(document.querySelector('.container').outerHTML)
console.log(document.querySelector('.container').innerText)

console.log(document.querySelector('.box').tagName)
//console.log(document.querySelector('.box').hidden = true)
console.log(document.querySelector('.box').innerHTML = "Hey Harry How Are You!")
console.log(document.querySelector('.box').hasAttribute('style'))
document.querySelector('.box').setAttribute('style', 'display: inline');
console.log(document.querySelector('.box').getAttribute('style'));
document.querySelector('.box').removeAttribute('style');


let div = document.createElement("div");
div.innerHTML = "I have been inserted by <b> Javascript</b>";
div.setAttribute("class", "created")
//document.querySelector(".container").append(div);
document.querySelector(".container").before(div);
//document.querySelector(".container").after(div);


let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<b> Hello, We can also use this instead of createElement </b>")

document.querySelector(".container").classList.add("Harry", "red")
document.querySelector(".container").classList.remove("Harry")
document.querySelector(".container").classList.toggle("green")

//document.designMode = 'on';
