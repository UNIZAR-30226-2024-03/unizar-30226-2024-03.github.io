
import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

 
/**
 * Obtener todas las etiquetas de una lista de audios (canciones y podcasts) que se encuentra en el body de la petición,
 * mediante una petición POST.
 * 
 * @param {any} token - Token de autenticación del usuario.
 * @param {number[]} idsAudios - Lista de identificadores de los audios.
 * @returns {Promise<object>} - Una promesa que se resuelve con el objeto de respuesta de la solicitud.
 * @throws {Error} - Si la solicitud de inicio de sesión no se puede completar correctamente.
 */
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
