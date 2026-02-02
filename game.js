const cards=document.querySelectorAll(".card")
const result=document.getElementById("result");
const start=document.getElementById("start");
let correctSet = new Set();
let playerSet = new Set();
const currentScore = document.querySelector('#currentScore span');
const highscore = document.querySelector('#highscore span');


function generateCorrectCards(){
    playerSet.clear();
    correctSet.clear();
    result.textContent = ""
    while(correctSet.size<3){
        const randomNumber = Math.floor(Math.random()*9) + 1;
        correctSet.add(randomNumber)
    }
    //card glowing
    correctSet.forEach((num)=>{document.getElementById(`card-${num}`).classList.add("flash");})
    setTimeout(()=>correctSet.forEach((num)=>{document.getElementById(`card-${num}`).classList.remove("flash");}), 100);
    console.log(correctSet)
    return correctSet;
}

cards.forEach((card)=>{
    card.addEventListener('click', ()=> {
        playerSet.add(Number(card.textContent))
        console.log(playerSet)

        if (playerSet.size === correctSet.size){
        let isWin = true;
        correctSet.forEach(num=>{
            if(!playerSet.has(num)){return isWin=false;}
        })
        if(isWin){currentScore.textContent++; result.textContent = "You win!"; if(currentScore.textContent>highscore.textContent){highscore.textContent = currentScore.textContent} } else {currentScore.textContent=0; result.textContent = "You lose!"}
    }
    })
})






start.addEventListener("click", generateCorrectCards) 