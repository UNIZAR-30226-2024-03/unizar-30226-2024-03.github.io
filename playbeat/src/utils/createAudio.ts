import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function createAudio(data: { titulo: string; descripcion: string; esPrivada: boolean; imgLista: string; esAlbum: boolean; tipoLista: any; idUsuario: number; audios: number[];}, token: any) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.post(Global.url + "audio/upload", data);

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { createAudio };
