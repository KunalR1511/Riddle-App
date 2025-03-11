const RiddleAPI= "https://riddles-api.vercel.app/random";

const Riddle = document.getElementById('riddle');
const Answer = document.getElementById('riddle-answer');

let ans="";

const rfrBTN = document.getElementById('refresh-btn');
const ansBTN = document.getElementById('answer-btn');

rfrBTN.addEventListener("click", (event)=>{
    getNewRiddle();
});

ansBTN.addEventListener("click", (event)=>{
    showAnswer();
});

async function getNewRiddle(){
    try{
        Riddle.innerHTML = "Loading ...."
        Answer.innerHTML = "";
        const response = await fetch(RiddleAPI);
        const data = await response.json();
        Riddle.innerHTML = "Riddle: " + data.riddle;
        ans="Answer: " + data.answer;
    } catch(error){
        Riddle.innerHTML = "Error Loading. Press Again. "
        Answer.innerHTML = "";
    }
}

async function showAnswer(){
    Answer.innerHTML = ans;
}