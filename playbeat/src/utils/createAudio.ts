import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function createAudio(data: {titulo: string;esPrivada: boolean,img: string,esAlbum: boolean,fechaLanz: any,duracionSeg: number,cancion: any, esPodcast:any, etiquetas: string, tipoEtiqueta: string}, token: any) {

    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        let formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });
        const response = await axios.post(Global.url + "audio/upload", formData ,  {        
            headers: {
                "Content-Type": "multipart/form-data",            
            }
        });
        //console.log(response)
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { createAudio };
