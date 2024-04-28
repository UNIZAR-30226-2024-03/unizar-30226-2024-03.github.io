/**
 * Inicia sesión de un usuario enviando una solicitud POST en el servidor.
 * 
 * @param {object} response - La respuesta de Google Sign-In, incluye nombre, email e imagen del usuario.
 * @returns {Promise<object>} - Una promesa que se resuelve con el objeto de respuesta de la solicitud.
 * @throws {Error} - Si la solicitud de inicio de sesión no se puede completar correctamente.
 */
import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function sendInfo(response: any) {
    try {
        const apiResponse = await axios.post(Global.url + "auth/login", response);
        console.log('Response:', apiResponse);
        return apiResponse;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
}

export { sendInfo };