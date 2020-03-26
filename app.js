var score = document.querySelector("#score");
var images = document.querySelectorAll("img.img-thumbnail");
var startGame = document.querySelector("button");
var alertText = document.querySelector("h4.alertText");
var imageSrcList = document.querySelectorAll("img");
var runningScore = 0;
var imageDivs = document.querySelectorAll(".card");
let lowScore = localStorage.getItem("low-score");
let game = document.querySelector("#game");
var startGame = document.querySelector("button");


let numCards = imageDivs.length;

let cardsFlipped = 0;
let currentScore = 0;

let pairs = {
  firstCard: null,
  secondCard: null
};


startGame.addEventListener("click", gameStart);


function gameStart() {
  game.classList.remove("hidden");
  let indices = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
  ];
  let pairs = shuffle(indices);

  for (let i = 0; i < imageDivs.length; i++) {
    let path = "./images/" + pairs[i] + ".jpg";

    imageDivs[i].children[0].src = path;
    console.log(imageDivs[i]);
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


for (let card of imageDivs) {
  card.addEventListener("click", imageClick);
}


function imageClick(e) {
  let currentCard = e.currentTarget;
  if (currentCard.children[0].classList.contains("flipped")) return;
  if (!pairs.firstCard || !pairs.secondCard) {
    if (!currentCard.children[0].classList.contains("flipped")) {
      setScore(currentScore + 1);
      console.log(currentScore);
    }
    currentCard.children[0].classList.add("flipped");
    pairs.firstCard = pairs.firstCard || currentCard;
    pairs.secondCard = currentCard === pairs.firstCard ? null : currentCard;
    console.log(pairs);
  }


  if (pairs.firstCard && pairs.secondCard) {
    let jpg1 = pairs.firstCard.children[0].src;
    console.log(jpg1)  
    let jpg2 = pairs.secondCard.children[0].src;
    console.log(jpg1);

    if (jpg1 === jpg2) {
      cardsFlipped += 2;
      pairs.firstCard.removeEventListener("click", imageClick);
      pairs.secondCard.removeEventListener("click", imageClick);
      pairs.firstCard = null;
      pairs.secondCard = null;
    } else {
      setTimeout(function () {
        console.log(pairs);
        pairs.firstCard.children[0].classList.remove("flipped");
        pairs.secondCard.children[0].classList.remove("flipped");
        pairs.firstCard = null;
        pairs.secondCard = null;
      }, 1000);
    }
  

  if (cardsFlipped === numCards) {
    endGame()
  }
  }
}


function setScore(newScore) {
  currentScore = newScore;
  document.getElementById("score").innerText = currentScore;
}


if (lowScore) {
  document.getElementById("best-score").innerText = lowScore;
}

function endGame() {
  let scoreHeader = document.getElementById("header");
  scoreHeader.innerText = "Game Over";
  
  let lowScore = +localStorage.getItem("low-score") || Infinity;
  if (currentScore < lowScore) {
    localStorage.setItem("low-score", currentScore)
  }
  
  var restartGame = document.querySelector("button");
  restartGame.innerText = "Replay"
  restartGame.addEventListener("click", function() {
    window.location.reload();
  })
}