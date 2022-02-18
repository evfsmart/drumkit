// Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.querySelector(".fill1").addEventListener("click", function() {
                         makeSound("w");
  setTimeout(function() {makeSound("a");}, 120);
  setTimeout(function() {makeSound("a");}, 240);
  setTimeout(function() {makeSound("a");}, 360);
  setTimeout(function() {makeSound("s");}, 480);
  setTimeout(function() {makeSound("a");}, 600);
  setTimeout(function() {makeSound("s");}, 720);
  setTimeout(function() {makeSound("a");}, 840);
  setTimeout(function() {makeSound("d");}, 960);
  setTimeout(function() {makeSound("d");}, 1080);
  setTimeout(function() {makeSound("d");}, 1200);
  setTimeout(function() {makeSound("d");}, 1320);
  setTimeout(function() {makeSound("k");}, 1440);
  buttonAnimation("fill1");
});

document.querySelector(".fill2").addEventListener("click", function() {
                       makeSound("w");
setTimeout(function() {makeSound("j");}, 240);
setTimeout(function() {makeSound("j");}, 360);
setTimeout(function() {makeSound("a");}, 480);
setTimeout(function() {makeSound("j");}, 720);
setTimeout(function() {makeSound("j");}, 840);
setTimeout(function() {makeSound("s");}, 960);
setTimeout(function() {makeSound("d");}, 1200);
setTimeout(function() {makeSound("k");}, 1440);
buttonAnimation("fill2");
});

// Detecting keyboard press

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Detecting mouseover

document.querySelector(".heading").addEventListener("mouseover", function() {
    makeSound("w");
    setTimeout(function() {makeSound("a");}, 100);
    setTimeout(function() {makeSound("k");}, 400);
  });


// Functions 

function makeSound(key) {

    switch (key) {
      case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;
      case "j":
        var snare = new Audio("sounds/snare.mp3");
          snare.play();
        break;
      case "k":
        var crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;
      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
        break;

      default:
        console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed");
    setTimeout(function() {activeButton.classList.remove("pressed")}, 200)
}