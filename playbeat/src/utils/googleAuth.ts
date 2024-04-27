/**
 * Inicia sesión de un usuario enviando una solicitud POST en el servidor.
 * 
 * @param {object} response - La respuesta de Google Sign-In.
 * @param {string} response.credential - JWT del usuario.
 * @returns {Promise<object>} - Una promesa que se resuelve con el objeto de respuesta de la solicitud.
 * @throws {Error} - Si la solicitud de inicio de sesión no se puede completar correctamente.
 */
import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function sendJWT(response: { credential: string }) {
    try {
        const requestData = { token: response.credential };
        const apiResponse = await axios.post(Global.url + "auth/login", requestData);

        return apiResponse;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
}

export { sendJWT };