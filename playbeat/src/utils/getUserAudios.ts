import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';


/**
 * Obtiene una lista de audios asociados a un usuario específico.
 *
 * @param {string} token - El token de autenticación para acceder a la API.
 * @param {number} id - El ID del usuario para el cual se desean obtener los audios.
 * @returns {Promise} Una promesa que resuelve con la respuesta de la solicitud HTTP.
 * 
 * @throws {Error} Lanza un error si ocurre un problema durante la solicitud HTTP.
 */
async function getUserAudios( token: any, id:number) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + "usuario/audios");

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getUserAudios };
