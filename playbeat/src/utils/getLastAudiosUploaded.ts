import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';


/**
 * Obtiene una lista de los utlimos audios subidos .
 *
 * @param {string} token - El token de autenticación para acceder a la API.
 * @param {number} num - El número de audios que se desea obtener.
 * @returns {Promise} Una promesa que resuelve con la respuesta de la solicitud HTTP.
 * 
 * @throws {Error} Lanza un error si ocurre un problema durante la solicitud HTTP.
 */
async function getLastAudiosUploaded( token: any) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url +"audio/lastuploadedaudios");

        return response;
    } catch (error) {
        console.error("Error geting audios:", error);
        throw error;
    }
}

export { getLastAudiosUploaded };
