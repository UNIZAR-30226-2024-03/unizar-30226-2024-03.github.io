import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function editPlaylist(data: { nombre: string; descripcion: string; esPrivada: boolean; imgLista: string; esAlbum: boolean; tipoLista: any; idUsuario: number; audios: number[]; Propietarios: number[]}, token: any, id: any) {
    try {

        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.put(Global.url + "lista/" + id, {updateBody: data});

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { editPlaylist };
