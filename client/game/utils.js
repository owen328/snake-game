import {LENGTH} from "./game.js";


export const generateRandomPosition = () => {
    return {
        x: Math.floor(Math.random() * (LENGTH - 1)) + 1,
        y: Math.floor(Math.random() * (LENGTH - 1)) + 1,
    }
}