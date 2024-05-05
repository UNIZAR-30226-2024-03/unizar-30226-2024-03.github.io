import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

/**
 * Función para seguir una lista .
 * @param {string} jws - JWT de autenticación.
 * @param {string} [id] - ID de la lista que se desea seguir.
 * @returns {Promise<Object>} - Promesa que se resuelve con la respuesta de la solicitud HTTP.
 * @throws {Error} - Error si ocurre algún problema durante la solicitud HTTP.
 */
async function followLista(jws: any, id: number) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${jws}`}
        const response = await axios.post(Global.url + "lista/follow/"+id);

        return response;

        
    } catch (error) {
        console.error("Error following playlist:", error);
        throw error;
    }
}

export { followLista };