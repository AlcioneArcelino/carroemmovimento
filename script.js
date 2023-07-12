// importing classes and ids in javascript file 
let frontWheel = document.getElementById("frontwheel");
let rearWheel = document.getElementById("rearwheel");
let btn = document.querySelector(".btn");
let container = document.querySelector(".container");

// onclick function (car's speed)
function speed1(){
    frontWheel.style.animation = "rotate 1.5s linear infinite";
    rearWheel.style.animation = "rotate 1.5s linear infinite";
    container.style.backgroundImage = "url(background2.jpg)";
}

function speed2(){
    frontWheel.style.animation = "rotate 1s linear infinite";
    rearWheel.style.animation = "rotate 1s linear infinite";
    container.style.backgroundImage = "url(background2.jpg)";
}

function speed3(){
    frontWheel.style.animation = "rotate 0.4s linear infinite";
    rearWheel.style.animation = "rotate 0.4s linear infinite";
    container.style.backgroundImage = "url(img/background2.jpg)";
}

function speed4(){
    frontWheel.style.animation = "rotate 0.4s linear infinite";
    rearWheel.style.animation = "rotate 0.4s linear infinite";
    container.style.backgroundImage = "url(img/background2.jpg)";
}

function speed5(){
    frontWheel.style.animation = "rotate 0.1s linear infinite";
    rearWheel.style.animation = "rotate 0.1s linear infinite";
    container.style.backgroundImage = "url(background2.jpg)";
}

// onclick function for stop the car

function stopCar(){
    frontWheel.style.animation = "rotate 0s linear infinite";
    rearWheel.style.animation = "rotate 0s linear infinite";
    container.style.backgroundImage = "url(background.png)";
}