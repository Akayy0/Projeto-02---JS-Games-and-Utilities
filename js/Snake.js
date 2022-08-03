// variaveis referentes ao canvas do snake game
const gameBoard = document.querySelector("gameBoard");
const ctx = gameBoard.getContext("2d");

const gameWidht = gameBoard.widht;
const gameHeight = gameBoard.height;

const unitSize = 25;

// variaveis referentes ao score e ao reset
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn")
let score = 0;
// variaveis referentes as cores

const boardBackground = "darkgreen";
const snakeColor = "white";
const snakeBorder = "black";
const foodColor = "red";

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

gameStart();

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function createFood(){};
function drawFood(){};
function moveSnake(){};
function drawSnake(){};
function change direction(){};
function checkGameOver(){};
function displayGameOver(){};
function resetGame(){};
