var score = document.getElementsByClassName("score")
var images = document.querySelectorAll("img.img-thumbnail")
var startGame = document.querySelector("button")
var alertText = document.querySelector("h4.alertText")
var imageSrcList = document.querySelectorAll("img")
var runningScore = 0;

// **Start Game
startGame.addEventListener("click", game)

function game(e){
 e.preventDefault();
   setImage();
}


function setImage() {
  // console.log(imageSrcList)
    for (let image of imageSrcList) {
        // console.log(image);
        // console.log(randomImg());

      image.src = `images/${randomImg()}.jpg`;
    }
}

function randomImg() {
  // console.log("randomImg");
  let set = [1, 2, 3, 4, 5, 6];
  let setMatch = [];
  let setMax = set.length;
  let setMatchMax = setMatch.length

  let result = 0

  if (set.length > 0) {
    for (let i = 0; i < set.length; i++) {
      let randomNumber = Math.floor(Math.random() * setMax);
      console.log(randomNumber)
      result = set[randomNumber]
      setMatch.push(set[randomNumber]);
      set.splice(result, 1);
      return result;
    }
  } else if (set.length = 0) {
    for (let i = 0; i < setMatch.length; i++) {
      let randomNumber = Math.floor(Math.random() * setMatchMax);
      setMatch.splice(setMatch[randomNumber], 1);
      return setMatch[randomNumber];
    }
  }
}


// **Event listener - find matches**

for (let image of images) {
  image.addEventListener("click", imageClick);
  
}


function imageClick(e){
  e.preventDefault()
  //  image.style.visibility = visible;
  e.target.style.opacity = "100%"

  var pairs = {
    firstCard: "undefined",
    secondCard: "undefined"
  };

  // let compairSrc = e.target.img

  if (pairs.firstCard === "undefined") {
    pairs.firstCard = e.target.img;
    //console.log(pairs.firstCard)



  } else if (pairs.firstCard !== "undefined" && pairs.firstCard === "undefined") {
    pairs.secondCard = document.querySelector("img");
    console.log(pairs.secondCard)
    if (pairs.firstImage === pairs.secondImage) {
      match()
    } else if (pairs.firstImage !== pairs.secondImage) {
      notAMatch()
    }
  }
}
// **Helper functions - find matches**


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
    image.style.visibility = "hidden";
}


// **Scoring**

function scoreCalc() {
  runningScore += 2;
  score.innerHTML = `Score: ${runningScore}`
    if (runningScore = 12) {
        alertText.innerHTML = "Congratulations, you won! Click Start to play again."
    }
}
