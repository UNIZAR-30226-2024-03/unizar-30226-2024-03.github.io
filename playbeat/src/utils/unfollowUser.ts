
import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

/**
 * Función para dejar de seguir a un usuario.
 * @param {string} jws - JWT de autenticación.
 * @param {string} [id] - ID opcional del usuario que se desea seguir.
 * @returns {Promise<Object>} - Promesa que se resuelve con la respuesta de la solicitud HTTP.
 * @throws {Error} - Error si ocurre algún problema durante la solicitud HTTP.
 */
async function unfollowUser(jws: string, id?: string) {
    try {
        const response = await axios.put(Global.url + "usuario/unfollow/" + id, null, {
            headers: {
                Authorization: `Bearer ${jws}`,
            },
        });
        return response;
        

        
    } catch (error) {
        console.error("Error geting user data:", error);
        throw error;
    }
}

export { unfollowUser };
