
let htmlTab = document.querySelectorAll('.case')
let lap = 1

function displayToken(currentElement){

    if (currentElement.innerHTML === "") {
    var x = document.getElementById("prompt");
    var results = document.getElementById("results");
    if(lap % 2 === 0){
            currentElement.innerHTML = "O"
            x.innerHTML = "C'est au tour du joueur 1!";
    }else{
            currentElement.innerHTML = "X"
            x.innerHTML = "C'est au tour du joueur 2";
    }
    lap++
    } else {
        alert("Vous ne pouvez pas cliquer sur une case déjà remplie");
    }

    for(let i = 0 ; i<htmlTab.length ; i++ ){

        console.log(htmlTab[i].innerHTML);
        if (htmlTab[0].innerHTML === 'X' && htmlTab[1].innerHTML === 'X' && htmlTab[2].innerHTML === 'X' ||
            htmlTab[3].innerHTML === 'X' && htmlTab[4].innerHTML === 'X' && htmlTab[5].innerHTML === 'X' ||
            htmlTab[6].innerHTML === 'X' && htmlTab[7].innerHTML === 'X' && htmlTab[8].innerHTML === 'X' ||

            htmlTab[0].innerHTML === 'X' && htmlTab[3].innerHTML === 'X' && htmlTab[6].innerHTML === 'X' ||
            htmlTab[1].innerHTML === 'X' && htmlTab[4].innerHTML === 'X' && htmlTab[7].innerHTML === 'X' ||
            htmlTab[2].innerHTML === 'X' && htmlTab[5].innerHTML === 'X' && htmlTab[8].innerHTML === 'X' ||

            htmlTab[0].innerHTML === 'X' && htmlTab[4].innerHTML === 'X' && htmlTab[8].innerHTML === 'X' ||
            htmlTab[2].innerHTML === 'X' && htmlTab[4].innerHTML === 'X' && htmlTab[6].innerHTML === 'X' 
        
        ){
            results.innerHTML = "Victoire du Joueur 1";
            lap = 1
            break;
        }
        else if (htmlTab[0].innerHTML === 'O' && htmlTab[1].innerHTML === 'O' && htmlTab[2].innerHTML === 'O' ||
            htmlTab[3].innerHTML === 'O' && htmlTab[4].innerHTML === 'O' && htmlTab[5].innerHTML === 'O' ||
            htmlTab[6].innerHTML === 'O' && htmlTab[7].innerHTML === 'O' && htmlTab[8].innerHTML === 'O' ||

            htmlTab[0].innerHTML === 'O' && htmlTab[3].innerHTML === 'O' && htmlTab[6].innerHTML === 'O' ||
            htmlTab[1].innerHTML === 'O' && htmlTab[4].innerHTML === 'O' && htmlTab[7].innerHTML === 'O' ||
            htmlTab[2].innerHTML === 'O' && htmlTab[5].innerHTML === 'O' && htmlTab[8].innerHTML === 'O' ||

            htmlTab[0].innerHTML === 'O' && htmlTab[4].innerHTML === 'O' && htmlTab[8].innerHTML === 'O' ||
            htmlTab[2].innerHTML === 'O' && htmlTab[4].innerHTML === 'O' && htmlTab[6].innerHTML === 'O' 
        ) {
            results.innerHTML = "Victoire du Joueur 2";
            lap = 1
            break;
        }

    }
}


function restart() {
    location.reload();

}
