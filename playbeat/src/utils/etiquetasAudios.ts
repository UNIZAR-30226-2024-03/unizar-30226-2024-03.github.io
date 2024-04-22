import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

// Obtener todas las etiquetas de una lista de audios (canciones y podcasts) que se encuentra en el body de la petición.
async function etiquetasAudios(token: any, idsAudios: number[]) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.post(Global.url + "etiquetas/audios/", {
            idsAudios: idsAudios
        });
        //console.log(response);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { etiquetasAudios };
