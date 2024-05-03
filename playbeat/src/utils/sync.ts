import { socket, socketConnect } from "@/utils/webSocket.ts";

  // Función para conectar al WebSocket.
  // De esta forma no tenemos que importar la función socketConnect en cada componente.
  export function connectToSocket(JWT: string, currentRoom: number) {
    socketConnect(JWT, currentRoom);
  }

  export function sendMessage(JWT: string, currentRoom: number) {
    let message = 'Hola, mundo!';
    const data = {
      room: currentRoom,
      JWT: JWT,
      message: message
    }
    message = JSON.stringify(data);
    socket.emit('message', message);
  }
  
  export function setRoom(JWT: string, currentRoom: number) {
    socket.emit('leave', currentRoom);
    const data = {
      room: currentRoom,
      JWT: JWT
    };
    const message = JSON.stringify(data);
    console.log(message);
    socket.emit('join', message);
  }
  
  function sendSync(JWT: string, room: number, audio: any) {
    console.log('Enviando Sync' + interval + audio.currentTime);
    const data = {
      currentTime: audio.currentTime,
      idAudio: audio.id,
      JWT: JWT
    };
    const message = JSON.stringify(data);
    socket.emit('Sync', message, room);
  }
  
  export function updateWS(JWT: string, currentRoom: number) {
    const data = {
      room: currentRoom,
      JWT: JWT
    };
    const message = JSON.stringify(data);
    socket.emit('reload', message);
  }
  let interval : any = null
  
  export function syncPlay( room: number, audio: any, JWT: string) {
    interval = setInterval(() => sendSync(JWT, room, audio), 2000); // Ejecuta myFunction cada 0.5 segundos
    console.log("interval" + interval)
    console.log('Iniciando Sync');
  }
  
  export function stopPlay () {
      console.log('Deteniendo Sync' + interval);
      clearInterval(interval);
      interval = null;
  };


  