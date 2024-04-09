/**
 * Inicia sesión de un usuario enviando una solicitud POST en el servidor.
 * 
 * @param {object} data - Los datos del usuario para iniciar sesión.
 * @param {any} data.email - El correo electrónico del usuario.
 * @param {any} data.contrasegna - La contraseña del usuario.
 * @returns {Promise<object>} - Una promesa que se resuelve con el objeto de respuesta de la solicitud.
 * @throws {Error} - Si la solicitud de inicio de sesión no se puede completar correctamente.
 */
import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function loginUser(data: { email: any; contrasegna: any; }) {
    try {
        const response = await axios.post(Global.url + "auth/login", data);

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { loginUser };
