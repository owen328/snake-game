import {food, initGood} from "./food.js";
import {app} from "./config.js";
import {generateRandomPosition} from "./utils.js";

export let snakePositions = [];
export let move = {x:0,y:1};


export const DEFAULT_POSITIONS = [
    {x: 0, y: 0},
];
export const changeMove = e => {
    if(e.key === 'ArrowDown' && move.x !== 0) {
        move = {x:0,y:1};
    }else if(e.key === 'ArrowUp' && move.x !== 0) {
        move = {x:0,y:-1};
    }else if(e.key === 'ArrowLeft' && move.y !== 0) {
        move = {x:-1,y:0};
    }else if(e.key === 'ArrowRight' && move.y !== 0) {
        move = {x:1,y:0};
    }
}


export const drawSnake = () => {
    for (let i = 0; i < snakePositions.length; i++) {
        const currentPo = snakePositions[i];
        const div = document.createElement('div');
        div.classList.add('snake');
        div.style.gridColumnStart = currentPo.x.toString();
        div.style.gridRowStart = currentPo.y.toString();
        app.appendChild(div);
    }
}

export const initSnake = () => {
    // 
    snakePositions = [...DEFAULT_POSITIONS];
    snakePositions.pop();
    snakePositions.push(generateRandomPosition());
    

}


export const changeSnakePos = () => {
    snakePositions.unshift({
        x: snakePositions[0].x + move.x,
        y: snakePositions[0].y + move.y
    });
    snakePositions.pop();
}



export const checkIfEatFood = () => {
    if (snakePositions[0].x === food.x && snakePositions[0].y === food.y) {
        snakePositions.unshift({x:snakePositions[0].x,y:snakePositions[0].y});
        initGood();
    }
}