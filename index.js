var buttonOnScreen = ["button_A1", "button_A2", "button_A3", "button_A4", "button_B1", "button_B2", "button_B3", "button_B4", "button_C1", "button_C2", "button_C3", "button_C4", "button_D1", "button_D2", "button_D3", "button_D4"];
var buttonPattern = [];
var buttonPressed = [];

var start = false;

var level = "0";

var checkAnswerCount = 0;
document.querySelector("#play").addEventListener("click",function(){
  if (!start) {
    start = true;
    patternGeneration();
  }
})
// document.addEventListener("keydown",function(){
//
// });
  for(var i = 0 ; i<buttonOnScreen.length ; i++){
    var selectedButton = document.querySelectorAll(".btn")[i];
      selectedButton.addEventListener("click", function() {
      var chosenButton = this.getAttribute("id");
      buttonPressed.push(chosenButton);
      fadeButton(chosenButton);
      checkAnswer(buttonPressed.length);
    });
}
function patternGeneration() {
  document.querySelector("#score").innerHTML = "SCORE: "
  buttonPressed = [];
  document.querySelector("#titleStart").innerHTML = "Round " + level ;
  level++;
  var randomNumber = Math.floor(Math.random() * 16);
  var randomChosenButton = buttonOnScreen[randomNumber];
  buttonPattern.push(randomChosenButton);
  fadeButton(randomChosenButton);
  // document.querySelector("#" + randomChosenButton).fadeIn(200).fadeOut(200).fadeIn(200);
}

function checkAnswer(currentRound) {
  checkAnswerCount = 0;

    for (var i = 0; i < buttonPressed.length; i++) {
      if (buttonPattern.includes(buttonPressed[i])) {
        checkAnswerCount++;
        if (checkAnswerCount === buttonPattern.length) {
          setTimeout(function() {
            patternGeneration();
          }, 1000);
        }
      } else {
        gameOver();
      }
    }
}

function fadeButton(currentButton) {
  document.querySelector("#" + currentButton).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("#" + currentButton).classList.remove("pressed");
  }, 200);
}

function gameOver() {
  document.querySelector("#titleStart").innerHTML = "Click on PLAY button to Play Again";
  document.querySelector("#score").innerHTML = "SCORE: " + level;
  level = "0";
  start = false;
  buttonPattern = [];
}
