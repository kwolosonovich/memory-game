var score = document.getElementsByClassName("score")
var image = document.querySelectorAll("img.img-thumbnail")
var startGame = document.querySelector("button")
var alertText = document.querySelector("h4.alertText")
var imageSrcList = document.querySelectorAll("img.src")
var runningScore = 0;

// Start Game

startGame.addEventListener("click", function() {
//   e.preventDefault();
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
    // e.preventDefault();
    image.style.visiibility = visible;
  if (pairs.firstCard === undefined) {
    pairs.firstCard = image.src;
  } else if (pairs.firstCard !== undefined && pairs.firstCard === undefined) {
    image.style.visiibility = visible;
    pairs.secondCard = image.src;
    if (pairs.firstImage === pairs.secondImage) {
      match()
    } else if (pairs.firstImage !== pairs.secondImage) {
      notAMatch()
    }
  }
});


var pairs = {
  firstCard: undefined,
  secondCard: undefined
};

function match() {
    alert("Match!");
    scoreCalc();
    pairs.firstCard = undefined;
    pairs.secondCard = undefined;
}

function notAMatch() {
    alert("Not a match. Try again!");
    pairs.firstCard = undefined;
    pairs.secondCard = undefined;
    image.style.visiibility = "hidden";
}


// Scoring

function scoreCalc() {
  runningScore += 2;
  score.innerHTML = `Score: ${runningScore}`
    if (runningScore = 12) {
        alertText.innerHTML = "Congratulations, you won! Click Start to play again."
    }
}
