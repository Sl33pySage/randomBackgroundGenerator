
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


body.style.background = "linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";
h3.textContent = body.style.background;


function setGradient() {
    body.style.background = "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    h3.textContent = body.style.background + ";";
}


function randomNumber() {
    var randomColor = Math.ceil(Math.random() * 255);
    return randomColor
}


function randomGradient() {
    // console.log(randomNumber(), randomNumber(), randomNumber())
    body.style.background = "linear-gradient(to right, rgb("
    + randomNumber()
    + ", "
    + randomNumber()
    + ", "
    + randomNumber()
    + "), rgb("
    + randomNumber()
    + ", "
    + randomNumber()
    + ", "
    + randomNumber()
    + "))";
    h3.textContent = body.style.background + ";"
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);

