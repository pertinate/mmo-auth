import * as socketio from 'socket.io';
import { socketEvents } from '../types';

export default class SocketHandler {
    server: socketio.Server;
    constructor(server: socketio.Server) {
        this.server = server;
    }

    setup = (player: socketio.Socket) => {
        console.log('received', player.id);
        player.on(socketEvents.disconnect, () => {

        });
    };
}
