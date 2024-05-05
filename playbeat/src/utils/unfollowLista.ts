import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

/**
 * Función para dejar de seguir una lista .
 * @param {string} jws - JWT de autenticación.
 * @param {string} [id] - ID de la lista que se desea seguir.
 * @returns {Promise<Object>} - Promesa que se resuelve con la respuesta de la solicitud HTTP.
 * @throws {Error} - Error si ocurre algún problema durante la solicitud HTTP.
 */
async function unfollowLista(jws: any, id: number) {
    try {
        const response = await axios.delete(Global.url + "lista/follow/"+id,{
            headers: {
                Authorization: `Bearer ${jws}`,
            },
        });
        console.log(response);
        return response;

        
    } catch (error) {
        console.error("Error unfollowing playlist:", error);
        throw error;
    }
}

export { unfollowLista };