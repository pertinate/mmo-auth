import * as socketio from 'socket.io';
import * as redis from 'socket.io-redis';
import Player from './bin/player';
import SocketHandler from './bin/connection/SocketHandler';

const io = socketio(3000, {
    // adapter: redis({ host: 'localhost', port: 6379 })
    path: '/game'
});

let playerList: Player[] = [];

export const socketHandler = new SocketHandler(io);

io.on('connection', socket => {
    console.log(`socket: ${socket.id} connected`);
    socketHandler.setup(socket);
});
/**
 * what are we doing with the auth server:
 * creating profiles
 * checking if profiles exist on request
 * checking if profiles are logged in
 * serializing information that is needed across everything
 */
