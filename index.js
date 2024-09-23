let randomNum=Math.floor(Math.random()*100+1)

const userInput = document.querySelector(".guessfield");
const submit = document.querySelector("#submit");
const GuessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHigh")
const ResultCont=document.querySelector(".resultParas")

let count=1
let Playgame=true;
let p=document.createElement('p');

if(Playgame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        guess=Number(userInput.value)
        ValidateGuess(guess)
    })
}

function ValidateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert('PLEASE ENTER A VALID NUMBER BETWEEB 1 TO 100.')
    }else{
        if(count===10){
            DisplayGuess(guess)
            DisplayMessage(`GAME OVER, THE RANDOM NUMBER WAS ${randomNum}`)
            endGame()
        }else{
            checkGuess(guess)
            DisplayGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess==randomNum){
        DisplayMessage("You won the game")
        endGame()
    }else if(guess<randomNum){
        DisplayMessage("TOOO LOW")
    }else{
        DisplayMessage("TOOO HIGH")
    }
}
function DisplayGuess(guess){
    GuessSlot.innerHTML+=`${guess}  `
    userInput.value=""
    remaining.innerHTML=`${10-count}`
    count++
}
function DisplayMessage(message){
    lowOrHigh.innerHTML=`${message}`
}
function endGame(){
    userInput.setAttribute('disabled',"")
    p.innerHTML=`START NEW GAME`
    p.classList.add('button')
    p.setAttribute("class","start")
    ResultCont.appendChild(p)
    Playgame=false
    startGame()
}
function startGame(){
    const button=document.querySelector(".start")
    button.addEventListener("click",function(e){
        e.preventDefault()
        randomNum=Math.floor(Math.random()*100+1)
        count=1
        GuessSlot.innerHTML=""
        remaining.innerHTML=10
        userInput.removeAttribute('disabled')
        lowOrHigh.innerHTML=""
        ResultCont.removeChild(p)
        Playgame=true
    })
}
