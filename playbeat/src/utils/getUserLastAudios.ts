import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';


/**
 * Obtiene una lista de los utlimos audios escuchados de un usuario específico.
 *
 * @param {string} token - El token de autenticación para acceder a la API.
 * @param {number} num - El número de audios que se desea obtener.
 * @returns {Promise} Una promesa que resuelve con la respuesta de la solicitud HTTP.
 * 
 * @throws {Error} Lanza un error si ocurre un problema durante la solicitud HTTP.
 */
async function getUserLastAudios( token: any, num:number) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + "usuario/lastAudios/"+num);

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getUserLastAudios };
