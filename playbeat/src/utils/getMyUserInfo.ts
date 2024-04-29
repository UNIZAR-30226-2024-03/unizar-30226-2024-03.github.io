import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

/**
 * Función para obtener la información del usuario autenticado desde el servidor.
 * Utiliza una solicitud GET con autorización para recuperar la información del usuario.
 *
 * @param {string} token - Token de autenticación para la solicitud.
 *
 * @returns {Promise<Object>} - Devuelve una promesa que resuelve con la información del usuario si la solicitud se realiza con éxito.
 * 
 * @throws {Error} - Lanza un error si ocurre algún problema durante la solicitud.
 *
 * La función establece la cabecera `Authorization` con el token proporcionado para la solicitud GET.
 * La URL utilizada es `Global.url + "usuario/"`.
 * Si la solicitud se completa con éxito, devuelve la información del usuario como un objeto JSON.
 * En caso de error, muestra un mensaje de error en la consola y lanza el error.
 */
async function getMyUserInfo(token: any) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + "usuario/");
        //console.log(response);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getMyUserInfo };
