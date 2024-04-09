import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function createAudio(data: {titulo: string;esPrivada: boolean;img: string;esAlbum: boolean;fechaLanz: number;duracionSeg: any}, token: any) {
    try {
        console.log(data)
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.post(Global.url + "audio/upload", data);

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { createAudio };
