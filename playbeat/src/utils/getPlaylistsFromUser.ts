import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';
import { getMyUserInfo } from "./getMyUserInfo";

/**
 * Función para obtener la lista de listas de reproducción (playlists) asociadas a un usuario específico desde el servidor.
 * Utiliza una solicitud GET con autorización para recuperar la lista de listas de reproducción del usuario.
 *
 * @param {any} id - El ID del usuario cuya lista de listas de reproducción se va a obtener.
 *                  Si `id` es -1, se obtiene la lista de reproducción del usuario autenticado.
 * @param {string} token - Token de autenticación para la solicitud.
 *
 * @returns {Promise<Object>} - Devuelve una promesa que resuelve con la lista de listas de reproducción del usuario si la solicitud se realiza con éxito.
 * 
 * @throws {Error} - Lanza un error si ocurre algún problema durante la solicitud.
 *
 * Si el `id` es -1, la función llama a `getMyUserInfo` para obtener el ID del usuario autenticado.
 * Establece la cabecera `Authorization` con el token proporcionado para la solicitud GET.
 * La URL utilizada es `Global.url + "lista/owned/" + id`.
 * Si la solicitud se completa con éxito, devuelve la lista de listas de reproducción del usuario como un objeto JSON.
 * En caso de error, muestra un mensaje de error en la consola y lanza el error.
 */
async function getPlaylistsFromUser( id: any, token: any) {
    try {
        
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

        const response = await axios.get(Global.url + "lista/owned/" + id);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getPlaylistsFromUser };
