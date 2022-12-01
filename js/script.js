const gridContainer = document.querySelector("div.grid");

const buttonPlay = document.querySelector("div.div-buttons");

let gameOver;

buttonPlay.addEventListener("click", function(){

    gameOver = false;

    gridContainer.innerHTML = " ";

    let bombs = [];

    let score = 0;

    // GENERAZIONE BOMBE A NUMERO CASUALE
    while(bombs.length < 16){
        const randomBomb = getRandomNumber(1, 100);

        if(!bombs.includes(randomBomb)){
            // Allora lo aggiungo nella nuova lista
            bombs.push(randomBomb);
        }  // Altrimenti vado avanti con la ricerca
    }
    console.log(bombs)

    for (let i = 1; i <= 100; i++){
        // Creo la cella
        const newSquare = getNewSquare(i);
        // Aggiungo event listener click della cella
        newSquare.addEventListener("click", function(){

            const scorePanel = document.querySelector("div.score-bar");
            const finalScore = document.createElement("div");
            finalScore.classList.add("panel");

            if(!gameOver){
                if(bombs.includes(i)){
                    // GAME OVER
                    gameOver = true;
                    newSquare.classList.toggle("bomb");
                    console.log("GAME OVER");
                    finalScore.innerHTML = `${score}`
                    scorePanel.appendChild(finalScore)
                } else {
                    // SCELTA CELLA ESATTA
                    newSquare.classList.add("clicked");
                    console.log(i);
                    score ++;
                    if(score === 84){
                        // VINCITA
                        gameOver = true;
                        finalScore.innerHTML = `HAI VINTOOOO!`
                        scorePanel.appendChild(finalScore)
                        console.log("HAI COMPIUTO LA MISSIONE IMPOSSIBILE!");
                    }
                }
            }
        })

        // Aggiungo la cella alla grid
        gridContainer.appendChild(newSquare);
    }
})

// CREAZIONE QUADRATINO DELLA GRIGLIA
function getNewSquare(content){
    
    const newSquare = document.createElement("div");
    
    newSquare.classList.add("square");

    // Assegno il numero (elemento o indice) dell'array ad ogni quadrato
    // newSquare.innerHTML = `${content}`;
    
    return newSquare;

}

// FUNZIONE PER GENERAZIONE NUMERO RANDOMICO
function getRandomNumber(numMin, numMax){
    if (numMin === numMax){
        return numMax;
    }

    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}

// Inizio partita:
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//      [Attenzione: Nella stessa cella può essere posizionata al massimo una bomba,
//       perciò nell’array delle bombe non potranno esserci due numeri uguali.]

// In seguito l'utente clicca su una cella: 
//      - Se il numero è presente nella lista dei numeri generati:
//          Abbiamo calpestato una bomba -> la cella si colora di rosso e la partita termina.

//      - Altrimenti:
//          La cella cliccata si colora di azzurro -> l'utente può continuare a cliccare sulle altre celle.

// La partita termina quando:
// - Il giocatore clicca su una bomba 
// - Quando raggiunge il numero massimo possibile di numeri consentiti 
//   (ovvero quando ha rivelato tutte le celle che non sono bombe).

// Al termine della partita:
// - Il software deve comunicare il punteggio, 
// (cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba).