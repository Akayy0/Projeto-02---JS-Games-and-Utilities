const form = document.getElementById("form");
form.addEventListener('submit', handleSubmit);

let status = document.getElementById('status');
let attempt = document.getElementById('attemp');
let result = document.getElementById('result');

const Guess = {
    max:10,
    attemptsNumber:0,
    numberDrawn: function randonValue(){
        return Math.round(Math.random()* this.max);
    }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt,value){
    attempt.innerHTML = 'Tentativas ' + value;
};

function handleSubmit(e){
    e.preventDefault();
    let kick = document.getElementById('kick').value;

    if (!kick) {
        alert('Need a Input Value');  
    };

    updateAttempt(attempt, ++Guess.attemptsNumber);
    
    if (numberDrawn == kick) {
        playAgain()
        status.innerHTML = 'Parabens, vc acertou!!';
        result.style.transition = '1s';
        result.style.backgroundColor = '#c8ff69';
        result.style.color = '#006700';
        status.style.color = '#006700';
        clear();

    } else if(numberDrawn > kick) {
        status.innerHTML = 'O Numero é Maior';
        status.style.color = '#c30000';
        result.style.color = '#c30000';

        clear()   
    } else if(numberDrawn < kick){
        status.innerHTML = 'O Numero é Menor';
        status.style.color = '#c30000';
        result.style.color = '#c30000';

        clear()
    }
};

function playAgain(){
    document.getElementById('btnRestart').style.display = 'flex';
};

function restart(){
    document.location.reload(true);
};

function clear(){
    document.getElementById('kick').value = '';
};