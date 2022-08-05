// variaveis referentes ao canvas do snake game
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const unitSize = 25;

// variaveis referentes ao score e ao reset
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn")
let score = 0;
// variaveis referentes as cores

const boardBackground = "rgb(43, 105, 53)";
const snakeColor = "rgb(184, 184, 184)";
const snakeBorder = "rgb(20, 20, 20)";
const foodColor = "rgb(184, 27, 27)";

// responsavel por falar se o jogo esta ativo ou nao
let running = false;

// responsaveis pela movimentação

let xVelocity = unitSize;
let yVelocity = 0;

let foodX;
let foodY;

// Variavel referentes ao corpo do snake
    // a snake sera uma array de objetos, cada objeto sera uma parte da snake
    // cada objeto tera uma cordenada

let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

// referente aos eventos de comando

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);


// funções para o jogo

// Função referente a o que vai ocorrer quando o jogo estiver ativo
gameStart()

function gameStart(){
    running= true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};
// função que ira conferir se o jogo esta rodando
function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        },75)

    }
    else{
        displayGameOver();
    }

};

// função responsavel por limpar o canvas
function clearBoard(){
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);

};

 // Função referente a criação das maçãs para a snake e a aleaotirização dela dentro do canvas
function createFood(){
    // funcão interna que definira um numero aleatorio referente a maçã no
    function randomFood(min,max){
        const randNum = Math.round((Math.random()*(max - min) +min) / unitSize) * unitSize;
        return randNum
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);   
};
// Função referente a criação do desenho das maças aleatorizadas dentro do canvas
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);

};
// Função referente ao movimento da snake
function moveSnake(){

};

// Função referente a criação da snake
function drawSnake(){
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart =>{
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    })
};

function changeDirection(){};

function checkGameOver(){};

function displayGameOver(){};

function resetGame(){};

