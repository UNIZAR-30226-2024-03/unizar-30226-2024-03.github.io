import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';


/**
 * Obtiene una lista de podcast asociados a un usuario específico.
 *
 * @param {number} id - El ID del usuario para el cual se desean obtener los audios.
 * @returns {Promise} Una promesa que resuelve con la respuesta de la solicitud HTTP.
 * 
 * @throws {Error} Lanza un error si ocurre un problema durante la solicitud HTTP.
 */
async function getSongsUser( id:number) {
    try {
        // axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + `usuario/audios?idUsuario=${id}&canciones=true&podcasts=false`);

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getSongsUser };
