
import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

/**
 * Función para obtener seguidores e info de un usuario.
 * @param {string} jws - JWT de autenticación.
 * @param {string} [id] - ID opcional del usuario del cual se desean obtener seguidores.
 * @returns {Promise<Object>} - Promesa que se resuelve con la respuesta de la solicitud HTTP.
 * @throws {Error} - Error si ocurre algún problema durante la solicitud HTTP.
 */
async function getFollowers(jws: string, id?: string) {
    try {
        if(!id) {
            const response = await axios.get(Global.url + 'usuario?rrss=True', {
                headers: {
                    Authorization: `Bearer ${jws}`,
                },
            });
            return response;
        }else{
            const response = await axios.get(Global.url + `usuario?idUsuario=${id}&rrss=True`,{
                headers: {
                    Authorization: `Bearer ${jws}`,
                },
            });
            return response;
        }

        
    } catch (error) {
        console.error("Error geting user data:", error);
        throw error;
    }
}

export { getFollowers };
