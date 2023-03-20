/* Declare variables below to save the different sections (divs) of your story*/

let title = document.querySelector(".title")



let storyopening = document.querySelector(".story-opening")

let option1Screen = document.querySelector(".option-one-screen")
option1Screen.style.display = "none"

let option1beg = document.querySelector(".option-one-beg")

let option2beg = document.querySelector(".option-two-beg")

let option1Screenbutton = document.querySelector(".option-one-mid")
option1Screenbutton.style.display = "none"


let option1Screenbutton2 = document.querySelector(".option-one-mid2")
option1Screenbutton2.style.display = "none"



let option2Screen = document.querySelector(".option-two-screen")
option2Screen.style.display = "none"



let option2Screenbutton = document.querySelector(".option-two-mid")
option2Screenbutton.style.display = "none"



let option2Screenbutton2 = document.querySelector(".option-two-mid2")
option2Screenbutton2.style.display = "none"



let option1ScreenEnd = document.querySelector(".option-one-end")
option1ScreenEnd.style.display = "none"



let option1ScreenEnd2 = document.querySelector(".option-one-end2")
option1ScreenEnd2.style.display = "none"


let option2ScreenEnd = document.querySelector(".option-two-end")
option2ScreenEnd.style.display = "none"


let option2ScreenEnd2 = document.querySelector(".option-two-end2")
option2ScreenEnd2.style.display = "none"


let button = document.querySelector(".option-one-mid");


let p = document.querySelector(".option-one-screen");

function bigImg(x) {
  x.style.height = "600px";
  x.style.width = "650px";
}

function normalImg(x) {
  x.style.height = "320px";
  x.style.width = "500px";
}


option1beg.onclick = function() {
  //displays the input on the page when the user clicks the button
  storyopening.style.display = "none";
  title.style.display = "none";
  option1beg.style.display = "none";
  option2beg.style.display = "none";
  option1Screen.style.display = "block";
  option1Screenbutton.style.display = "block";
  option1Screenbutton2.style.display = "block"

  console.log(option1Screen)
};

option2beg.onclick = function() {
  storyopening.style.display = "none";
  title.style.display = "none";
  option1beg.style.display = "none";
  option2beg.style.display = "none";
  option2Screen.style.display = "block";
  let text = document.querySelector(".text")
  option2Screenbutton.style.display = "block"
  option2Screenbutton2.style.display = "block";
  text.innerHTML = "Okay… That's a weird choice but what do you want to stream?"
  console.log(text)
};

option1Screenbutton.onclick = function() {
  option1Screen.style.display = "none"
  option1Screenbutton.style.display = "none"
  option1Screenbutton2.style.display = "none"
  option1ScreenEnd.style.display = "block"
}

option1Screenbutton2.onclick = function() {
  option1Screen.style.display = "none"
  option1Screenbutton.style.display = "none"
  option1Screenbutton2.style.display = "none"
  option1ScreenEnd2.style.display = "block"
}

option2Screenbutton.onclick = function() {
  option2Screen.style.display = "none"
  option2Screenbutton.style.display = "none"
  option2Screenbutton2.style.display = "none"
  option2ScreenEnd.style.display = "block"
}

option2Screenbutton2.onclick = function() {
  option2Screen.style.display = "none"
  option2Screenbutton.style.display = "none"
  option2Screenbutton2.style.display = "none"
  option2ScreenEnd2.style.display = "block"
}