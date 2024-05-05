import { io } from "socket.io-client";
import { EventEmitter } from 'events';


 const socket = io("http://playbeat.uksouth.cloudapp.azure.com:3001", {});
 export const eventEmitter = new EventEmitter();

export function socketConnect(JWT: string, currentRoom: number) {
  // Aqui se crea el cliente de WebSocket.
  console.log("Estoy en socket.on");
  socket.on("connect", function() {
    console.log("Connected to WS.io server");
    const data = {
      room: currentRoom,
      JWT: JWT
    };
    const message = JSON.stringify(data);
    console.log(message);
    socket.emit('join', message);    
  });
}

socket.on("disconnect", () => {
  console.log("Disconnected from WS.io server");
});

// Escuchar cuando se recibe un mensaje
socket.on('message', function(message) {
  console.log('Mensaje recibido: ' + message);
});

// Escuchar cuando se recibe un mensaje de recarga
socket.on('reload', function(message) {
    console.log('Recargando...');
    //esperar 1 segundo
    setTimeout(function(){
      // location.reload(); // Mejor volver a hacer un fetch
      eventEmitter.emit('recarga');

    }, 1000);
});


// Escuchar cuando ocurre un error
socket.on('connect_error', function(error: Error) {
  console.error('Error en la conexión WebSocket: ' + error);
});

export { socket };
