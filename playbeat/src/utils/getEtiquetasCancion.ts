/**
 * Obtiene las etiquetas disponibles para las canciones.
 * 
 * @param {any} token - Token de autenticación del usuario.
 * @returns {Promise<object>} - Una promesa que se resuelve con el objeto de respuesta de la solicitud.
 * @throws {Error} - Si la solicitud de inicio de sesión no se puede completar correctamente.
 */
import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function getEtiquetaCancion(token: any) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + "etiquetas/cancion/");
        // console.log(response.data);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getEtiquetaCancion };
