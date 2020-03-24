var score = document.querySelector("h4.score");
var image = document.querySelectorAll("img.img-thumbnail")
var startGame = document.querySelector("button")
var alertText = document.querySelector("h4.alertText")
var runningScore = 0;
var imageSrcList = document.querySelectorAll("img.src")

// Start Game

startGame.addEventListener("click", function(e) {
  e.preventDefault();
  setImage();
});

function setImage() {
    for (src of imageSrcList) {
            image.src = `images/${randomImg}.png`;
        }
    }

function randomImg() {
  let set = [1, 2, 3, 4, 5, 6];
  let setMatch = [];
  let min = set[0];
  let max = set.length - 1;

  if (set.length > 0) {
    for (let i = 0; i < set.length; i++) {
      let randomNum = Math.floor(Math.random() * max);
      setMatch.push(set[randomNum]);
      set.splice(randomNum, 1);
      return randomNumber;
    }
  } else if (set.length === 0) {
    for (let i = 0; i < setMatch.length; i++) {
      let randomNum = Math.floor(Math.random() * max);
      set.splice(randomNum, 1);
      return randomNumber;
    }
  }
}


// Event listener - find matches

image.addEventListener("click", function() {
  image.style.visiibility = visible;
  if (pairs.firstCard === undefined) {
    pairs.firstCard = image.src;
  } else if (pairs.firstCard !== undefined && pairs.firstCard === undefined) {
    image.style.visiibility = visible;
    pairs.secondCard = image.src;
    if (pairs.firstImage === pairs.secondImage) {
      alert("Match!");
      scoreCalc();
      pairs.firstCard = undefined;
      pairs.secondCard = undefined;
    } else if (pairs.firstImage !== pairs.secondImage) {
      alert("Not a match. Try again!");
      pairs.firstCard = undefined;
      pairs.secondCard = undefined;
      image.style.visiibility = hidden;
    }
  }
});


var pairs = {
  firstCard: undefined,
  secondCard: undefined
};


// Scoring

function scoreCalc() {
  var addTwo = runningScore + 2;
  var scoreTotal = document.createTextNode(`Score: ${runningScore}`);
    score.appendChild(scoreTotal)
    if (runningScore = 12) {
        alertText.innerHTML = "Congratulations, you won! Click Start to play again."
    }
}
