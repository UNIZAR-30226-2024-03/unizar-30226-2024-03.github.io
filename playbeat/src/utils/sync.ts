import { socket, socketConnect } from "@/utils/webSocket.ts";

  // Función para conectar al WebSocket.
  // De esta forma no tenemos que importar la función socketConnect en cada componente.
  export async function connectToSocket(JWT: string, currentRoom: number) {
    console.log("Estoy en connectToSocket");
    await socketConnect(JWT, currentRoom);
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
    console.log("setroom")
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
    console.log('Enviando Sync' + ' ' + interval + ' ' + audio.currentTime);
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
  
  export function syncPlay( room: number, audioId: number, audio:any, JWT: string) {
    // Pasamos el objeto audio para poder acceder a la propiedad currentTime en tiempo real y que se actualice en el servidor.
    interval = setInterval(() => sendSync(JWT, room, {id:audioId, currentTime: audio.current.currentTime}), 2000); // Ejecuta myFunction cada 2 segundos
    //("interval" + interval)
    console.log('Iniciando Sync');
  }
  
  export function stopPlay () {
      //onsole.log('Deteniendo Sync' + interval);
      clearInterval(interval);
      interval = null;
  };


  