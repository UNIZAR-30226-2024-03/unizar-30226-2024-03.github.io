import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

/**
 * Obtiene la lista de las mejores canciones (audios) asociadas a un usuario específico.
 *
 * @param {string} jws - El token JSON Web para autenticar la solicitud.
 * @param {number} id - El ID del usuario para el cual se desean obtener las mejores canciones.
 * @param {number} num - El número máximo de canciones (audios) que se desean obtener.
 * @returns {Promise} Una promesa que resuelve con la respuesta de la solicitud HTTP.
 *
 * @throws {Error} Lanza un error si ocurre un problema durante la solicitud HTTP.
 */
async function userTopSongs(jws: string, id: number, num: number) {
    try {

        const response = await axios.get(Global.url + `usuario/topAudios?numAudios=${num}&userId=${id}`,{
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

export { userTopSongs };
