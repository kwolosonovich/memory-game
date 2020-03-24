var score = document.querySelector("h4.score");

var image = document.querySelector("img.img-thumbnail")

function randomImg() {
  let set = [1, 2, 3, 4, 5, 6];
  let setMatch = [];
  let min = set[0];
  let max = set.length - 1;

  for (let i = 0; i < set.length; i++) {
    let randomNum = Math.floor(Math.random() * max);
    setMatch.push(set[randomNum]);
    set.splice(randomNum, 1);
    // console.log(randomNum)
  }

  //   console.log(set)
  //   console.log(setMatch)
}

randomImg();