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
const snakeColor = "rgb(255, 255, 255)";
const snakeBorder = "rgb(255, 255, 255)";
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

// Chamada de função que ira iniciar o jogo
gameStart()
// Função referente a o que vai ocorrer quando o jogo estiver ativo

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
    const head = {x: snake[0].x + xVelocity, y: snake[0].y +yVelocity}
    snake.unshift(head);

    // Referente ao momento em que a snake atinge a maçã
    if(snake[0].x == foodX && snake[0].y == foodY){
        score +=1;
        scoreText.textContent = score;
        createFood()
    }
    else{
        snake.pop();
    }

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

// Função referente ao movimento da snake para as direções
function changeDirection(event){
    const keyPressed = event.keyCode;
    // valores encontrador com console.log(keyPressed), apertando a direção selecionada os valores sao mostrados
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);

    // Swhith para o movimento da snake
    switch (true) {
        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
       
    }
};

// Função referente a instancias que definem um GameOver
function checkGameOver(){
    // GameOver caso a snake bata nas paredes
    switch(true){
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >=gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
    }
    // GameOver caso o corpo da snake se encontre com uma de suas partes
    // no caso criamos uma variavel (i), que vai agregar um valor que se for igual ao valor do corpo da snake o jogo e encerrado
    for(let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};

// Função que ficara responsavel por demonstrar na tela o texto de game over
function displayGameOver(){
    ctx.font = "50px Ubuntu";
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!!!", gameWidth / 2, gameHeight / 2);
    running = false;

};

// Função referente ao reset do game
function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];

    gameStart();
    
};

