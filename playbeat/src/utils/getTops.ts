import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';


/**
 * Obtiene las listas de tops.
 *
 * @param {string} token - El token de autenticación para acceder a la API.
 * @returns {Promise} Una promesa que resuelve con la respuesta de la solicitud HTTP.
 * 
 * @throws {Error} Lanza un error si ocurre un problema durante la solicitud HTTP.
 */
async function getTops( token: any) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + "lista/alltops");
        return response;
    } catch (error) {
        console.error("Error getting tops:", error);
        throw error;
    }
}

export { getTops };
