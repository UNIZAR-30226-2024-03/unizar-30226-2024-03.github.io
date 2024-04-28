import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

/**
 * Función para eliminar una lista de reproducción (playlist) en el servidor utilizando una solicitud DELETE.
 *
 * @param {number} id - ID de la lista de reproducción que se va a eliminar.
 * @param {string} token - Token de autenticación para la solicitud.
 *
 * @returns {Promise} - Devuelve una promesa que resuelve con la respuesta de la solicitud DELETE si se realiza con éxito.
 * 
 * @throws {Error} - Lanza un error si ocurre algún problema durante la solicitud.
 *
 * El token de autenticación se utiliza en la cabecera de la solicitud para autorizar la acción.
 */
async function deletePlaylist( id:number, token: any) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.delete(Global.url + "lista/"+ id);

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { deletePlaylist };
