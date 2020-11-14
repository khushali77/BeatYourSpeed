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
    setTimeout(function(){
        message.innerHTML = 'Game Started!';
    },1000);
    showWord(words);
    wordInput.value='';
    //Start mathcing
    wordInput.addEventListener('input',StartMatch);
    // callcountdown every sec
    setInterval(countdown,1000);
    // setInterval(checkStatus,50);
}

function StartMatch(){
    document.getElementById("inputbox").style.backgroundColor="whitesmoke";
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
        if(score===-1)
        {
            message.innerHTML = 'Game Restarted!';
            wordInput.value = '';
            showWord(words);
            time=6;
            isPlaying=true;
            wordInput.addEventListener('input',StartMatch);
            // setInterval(countdown,1000);
        }
        else
        {
            message.innerHTML = 'Correct';
            setTimeout(function(){
           message.innerHTML = '';
           }, 1000);
        }
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
    if(time>0){
        time--;
    }
    else if(time===0 && score>=0){
        isPlaying = false;
        message.innerHTML = 'Game Over!';
        document.getElementById("inputbox").style.backgroundColor="gray";
        score=-1;
    }
    timeDisplay.innerHTML = time;
}
