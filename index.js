// Detecting Button Press
var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
  playSound(event.key);
});

// Play Sound Based on Button Pressed or Key Pressed
function playSound(key) {
  switch (key) {
    case "w":
      var kick = new Audio('./kick-bass.mp3');
      kick.play();
      break;
    case "a":
      var snare = new Audio('./snare.mp3');
      snare.play();
      break;
    case "s":
      var tom1 = new Audio('./tom-1.mp3');
      tom1.play();
      break;
    case "d":
      var tom2 = new Audio('./tom-2.mp3');
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio('./tom-3.mp3');
      tom3.play();
      break;
    case "k":
      var tom4 = new Audio('./tom-4.mp3');
      tom4.play();
      break;
    case "l":
      var crash = new Audio('./crash.mp3');
      crash.play();
      break;
    default:
      console.log(key);
  }
}
