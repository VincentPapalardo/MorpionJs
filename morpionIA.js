function entierAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let htmlTab = document.querySelectorAll(".case");
let lap = 1;

function displayToken(currentElement) {
  if (currentElement.innerHTML === "") {
    if (lap % 2 !== 0) {
      var x = document.getElementById("prompt");
      var results = document.getElementById("results");
      currentElement.innerHTML = "X";
      lap++
  } else {
    alert("Vous ne pouvez pas remplir une case déjà remplie !");
  }
  setTimeout(function(){
      ia()
  }, 10)

  for (let i = 0; i < htmlTab.length; i++) {
    console.log(htmlTab[i].innerHTML);
    if (
      (htmlTab[0].innerHTML === "X" &&
        htmlTab[1].innerHTML === "X" &&
        htmlTab[2].innerHTML === "X") ||
      (htmlTab[3].innerHTML === "X" &&
        htmlTab[4].innerHTML === "X" &&
        htmlTab[5].innerHTML === "X") ||
      (htmlTab[6].innerHTML === "X" &&
        htmlTab[7].innerHTML === "X" &&
        htmlTab[8].innerHTML === "X") ||
      (htmlTab[0].innerHTML === "X" &&
        htmlTab[3].innerHTML === "X" &&
        htmlTab[6].innerHTML === "X") ||
      (htmlTab[1].innerHTML === "X" &&
        htmlTab[4].innerHTML === "X" &&
        htmlTab[7].innerHTML === "X") ||
      (htmlTab[2].innerHTML === "X" &&
        htmlTab[5].innerHTML === "X" &&
        htmlTab[8].innerHTML === "X") ||
      (htmlTab[0].innerHTML === "X" &&
        htmlTab[4].innerHTML === "X" &&
        htmlTab[8].innerHTML === "X") ||
      (htmlTab[2].innerHTML === "X" &&
        htmlTab[4].innerHTML === "X" &&
        htmlTab[6].innerHTML === "X")
    ) {
      results.innerHTML = "Vous avez gagné";
      lap = 1;
      break;
      
    } else if (
      (htmlTab[0].innerHTML === "O" &&
        htmlTab[1].innerHTML === "O" &&
        htmlTab[2].innerHTML === "O") ||
      (htmlTab[3].innerHTML === "O" &&
        htmlTab[4].innerHTML === "O" &&
        htmlTab[5].innerHTML === "O") ||
      (htmlTab[6].innerHTML === "O" &&
        htmlTab[7].innerHTML === "O" &&
        htmlTab[8].innerHTML === "O") ||
      (htmlTab[0].innerHTML === "O" &&
        htmlTab[3].innerHTML === "O" &&
        htmlTab[6].innerHTML === "O") ||
      (htmlTab[1].innerHTML === "O" &&
        htmlTab[4].innerHTML === "O" &&
        htmlTab[7].innerHTML === "O") ||
      (htmlTab[2].innerHTML === "O" &&
        htmlTab[5].innerHTML === "O" &&
        htmlTab[8].innerHTML === "O") ||
      (htmlTab[0].innerHTML === "O" &&
        htmlTab[4].innerHTML === "O" &&
        htmlTab[8].innerHTML === "O") ||
      (htmlTab[2].innerHTML === "O" &&
        htmlTab[4].innerHTML === "O" &&
        htmlTab[6].innerHTML === "O")
    ) {
      console.log("prout");
      results.innerHTML = "Victoire de l'IA";
      lap = 1;
      break;
    }
  }
}
}

function ia(){
   for (let i = 0; i < htmlTab.length - 1; i++) {
        let rand = entierAleatoire(0, 8);
        if (htmlTab[rand].innerHTML === "") {
          htmlTab[rand].innerHTML = "O";
          lap++
          break;
        }
      }
}

function restart() {
  location.reload();
}
