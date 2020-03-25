var score = document.getElementsByClassName("score")
var images = document.querySelectorAll("img.img-thumbnail")
var startGame = document.querySelector("button")
var alertText = document.querySelector("h4.alertText")
var imageSrcList = document.querySelectorAll("img")
var runningScore = 0;
var imageDivs = document.querySelectorAll(".card");
console.log(imageDivs)
let lowScore = localStorage.getItem("low-score");



// **Start Game
startGame.addEventListener("click", gameStart)

// function game(e){
//  e.preventDefault();
//   //  setImage();
// }


//function setImage() {

    // shuffle(setOfPics)
    // console.log(setOfPics)
    // for (let image of imageSrcList) {
    // // for (let i = 0; i < pairs.length; i++) {
    //     image.src = `images/${randomImage}.jpg`;
    //   }
    //   // imageSrcList.src = imagePath;
    // for (let i = 0; i < imageDiv.length; i++) {
    //   let path = `images/${randomImage}.jpg`;
    //   imageDiv[i].children[0].src = path
    // }


//     return pairs[i]


    // for (let i = 0; i < setOfPics.length; i++) {
    //   imageSrcList.src = `imagescard"/${setOfPics[i]}.jpg`;
    // }

        // for (let image of imageSrcList) {
        //   for (let i = 0; i < setOfPics.length; i++) {
        //     image.src = `images/${setOfPics[i]}.jpg`;

        //   }
        // }
          
          // image.src = `images/${randomImg()}.jpg`;

//}


// function randomImage() {
//   for (let i = 0; i < pairs.length; i++) {
//     return pairs[i]
//   }
// }


// function shuffle(setOfPics) {
//   var currentIndex = setOfPics.length, temporaryValue, randomIndex;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = setOfPics[currentIndex];
//     setOfPics[currentIndex] = setOfPics[randomIndex];
//     setOfPics[randomIndex] = temporaryValue;
//   }
//   pairs = setOfPics
// }

// function randomImg() {
//   // console.log("randomImg");
  // let set = [1, 2, 3, 4, 5, 6, 3, 2, 1, 4, 5, 6];
//   let pairs = shuffle(set)
  // if (set.length > 0) {
  //   for (let i = 0; i < set.length; i++) {
  //     let randomNumber = Math.floor(Math.random() * setMax);
  //     console.log(randomNumber)
  //     result = set[randomNumber]
  //     setMatch.push(set[randomNumber]);
  //     set.splice(result, 1);
  //     return result;
  //   }
  // } else if (set.length = 0) {
  //   for (let i = 0; i < setMatch.length; i++) {
  //     let randomNumber = Math.floor(Math.random() * setMatchMax);
  //     result = setMatch[randomNumber];
  //     setMatch.splice(setMatch[randomNumber], 1);
  //     return result;
  //   }
  // }


function gameStart() {
  let game = document.querySelector("#game")
  game.classList.remove("hidden")
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
  // shuffle the order to make it random and store to the pairs array
  let pairs = shuffle(indices);
  console.log(pairs);
  // loop over the card divs and assign them randomized image pairs
  for (let i = 0; i < imageDivs.length; i++) {
    // construct image path
    let path = "./images/" + pairs[i] + ".jpg";
    console.log(path)
    // target the img child element and set its src to the path
    imageDivs[i].children[0].src = path;
    console.log(imageDivs[i])
  }
}

// a function to randomly shuffle the array, from Stack Overflow
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


// **Event listener - find matches**

for (let image of images) {
  image.addEventListener("click", imageClick);
}


  var pairs = {
    firstCard: null,
    secondCard: null
  };

function imageClick(e){
  e.preventDefault()
  let currentCard = e.target.parentElement;
  console.log(currentCard)  

e.target.style.opacity = "100%"


  // let compairSrc = e.target.img

  if (pairs.firstCard === null) {
    pairs.firstCard = e.target;
    console.log(pairs.firstCard)

  } else if (pairs.firstCard !== null && pairs.firstCard === null) {
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
    pairs.firstCard = null;
    pairs.secondCard = null;
}

function notAMatch() {
    alert("Not a match. Try again!");
    pairs.firstCard = "undefined";
    pairs.secondCard = "undefined";
    image.style.opacity = "0";
}


// **Scoring**

// function scoreCalc() {
//   runningScore += 1;
//   score.innerHTML = `Score: ${runningScore}`

// }

  function setScore(newScore) {
    currentScore = newScore;
    score.innerText = currentScore;
  }

  if (lowScore) {
    document.getElementById("best-score").innerText = lowScore;
  }