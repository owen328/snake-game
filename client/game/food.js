import {app} from "./config.js";
import {generateRandomPosition} from "./utils.js";
import {snakePositions} from "./snake.js";

export let food = {};

export const drawFood = () => {
    const div = document.createElement('div');
    div.classList.add('food');
    div.style.gridColumnStart = food.x.toString();
    div.style.gridRowStart = food.y.toString();
    app.appendChild(div);
}


export const initGood = () => {
    let x,y;
    while ({x, y} = generateRandomPosition()){
        let isRightPos = true;
        for (let {snakeX, snakeY} in snakePositions) {
            if (x === snakeX && y === snakeY) {
                isRightPos = false;
                break;
            }
        }
        if (isRightPos){
            food.x = x;
            food.y = y;
            return;
        }
    }
}
