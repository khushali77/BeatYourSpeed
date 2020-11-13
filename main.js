window.addEventListener('load',init);

let time = 5;
let score = 0;
let isPlaying; //false when game over = false on-going = true

//DOM
const wordInput = document.querySelector('#inputbox');
const currentWord = document.querySelector('#Mainword');
const scoreDisplay = document.querySelector('#Score');
const timeDisplay = document.querySelector('#secs');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = ['about','above','accept','according','bring','fund','future','game','garden','brother','budget','build','building','business','court','formation','inside','instead','institution','interest','cover','road','rock','role','room','rule','run','week','weight','you','young','your','yourself','well','west','safe','same','probably','problem','process','produce','product','production','save','say','create','crime','but','buy','account','across','act','action','activity','actually'];

function init(){
    //Load word from array
    showWord(words);
    //Start mathcing
    wordInput.addEventListener('input',StartMatch);
    // callcountdown every sec
    setInterval(countdown,1000);
    setInterval(checkStatus,50);
}

function StartMatch(){
    if(matchwords()){
        isPlaying=true;
        time=6;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score!=-1){
        scoreDisplay.innerHTML = score;
    }
    else{
        scoreDisplay.innerHTML = 0;
    }

}

function matchwords(){
    if(wordInput.value===currentWord.innerHTML){
        message.innerHTML = 'Correct';
        setTimeout(function(){
           message.innerHTML = '';
        }, 1000);
        return true;
    }
    else{
        message.innerHTML='';
        return false;
    }
}

//Pick & show random word
function showWord(words){
    const randIndex = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[randIndex];
}

function countdown(){
    //Make sure time is not run out
    console.log(message)
    if(time>0){
        time--;
    }
    else if(time===0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML = 'Game Over! ';
        score=-1;
    }
}