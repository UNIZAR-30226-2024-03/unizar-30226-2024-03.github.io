import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

/**
 * Obtiene las etiquetas disponibles para los podcast, mediante una petición GET.
 * 
 * @param {any} token - Token de autenticación del usuario.
 * @returns {Promise<object>} - Una promesa que se resuelve con el objeto de respuesta de la solicitud.
 * @throws {Error} - Si la solicitud de inicio de sesión no se puede completar correctamente.
 */
async function getEtiquetaPodcast(token: any) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + "etiquetas/podcast/");
        //console.log(response);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getEtiquetaPodcast };
