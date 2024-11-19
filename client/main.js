import './game/game.js';
import {io} from 'socket.io-client';


const endpoint = window.location.hostname + ':' + window.location.port;

const socket = io(endpoint);


socket.on('connect', (socket) => {
    console.log('Connected!');
})
















