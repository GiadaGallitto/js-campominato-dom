const gridContainer = document.querySelector("div.grid")

const buttonPlay = document.querySelector("div.div-buttons")

buttonPlay.addEventListener("click", function(){

    gridContainer.innerHTML = " "

    for (let i = 1; i <= 100; i++){
        const newSquare = getNewSquare(i);
        
        gridContainer.appendChild(newSquare);
    }

})



function getNewSquare(content){
    
    const newSquare = document.createElement("div");
    
    newSquare.classList.add("square");

    // newSquare.innerHTML = `${content}`
    
    newSquare.addEventListener("click", function(){
        newSquare.classList.toggle("clicked");
        console.log(content)
    })

    return newSquare

}