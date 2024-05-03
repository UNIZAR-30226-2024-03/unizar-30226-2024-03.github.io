import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';


/**
 * Función para obtener la información adicional de una lista de reproducción (playlist) desde el servidor.
 * Utiliza una solicitud GET con autorización para recuperar la información de la lista de reproducción.
 *
 * @param {string} usuario - El usuario a buscar en la base de datos.
 * @param {string} token - Token de autenticación para la solicitud.
 *
 * @returns {Promise<Object>} - Devuelve una promesa que resuelve con la información de la lista de reproducción si la solicitud se realiza con éxito.
 * 
 * @throws {Error} - Lanza un error si ocurre algún problema durante la solicitud.
 *
 * La función establece la cabecera `Authorization` con el token proporcionado para la solicitud GET.
 * Si la solicitud se completa con éxito, devuelve la información adicional de la lista de reproducción como un objeto JSON.
 * En caso de error, muestra un mensaje de error en la consola y lanza el error.
 */
async function searchUser( usuario:string, token: any) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + `search?q=${usuario}&usuario=true&lista=false&album=false&cancion=false&podcast=false`);

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { searchUser };
