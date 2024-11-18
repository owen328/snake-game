import * as snake from './snake.js';
import * as food from './food.js';
import {snakePositions} from "./snake.js";


export const LENGTH = 20;


let loop;

const checkGameOver = () => {
    if(snakePositions[0].x === LENGTH + 1|| snakePositions[0].x === 0|| snakePositions[0].y === 0 || snakePositions[0].y === LENGTH + 1){
        clearInterval(loop);
        document.removeEventListener('keydown', snake.changeMove);
        document.addEventListener('keydown', startGame);
        alert('game over');
    }
}

const startGame = (e) => {
    if (e.key !== 'Enter') {
        return;
    }
    document.removeEventListener('keydown', startGame);
    document.addEventListener('keydown', snake.changeMove);
    snake.initSnake();
    food.initGood();
    loop = setInterval(drawGame, 1000 / 5);
}

const drawGame = () => {
    app.innerHTML = ``;
    snake.changeSnakePos();
    food.drawFood();
    snake.drawSnake();
    snake.checkIfEatFood();
    checkGameOver();
}

const app = document.getElementById('app');

document.addEventListener('keydown', startGame);
