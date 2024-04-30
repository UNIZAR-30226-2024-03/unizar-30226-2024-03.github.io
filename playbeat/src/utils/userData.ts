import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

/**
 * Recupera datos de usuario haciendo una solicitud GET a la URL del servidor.
 * 
 * @param {string} jws - El JSON Web Token (JWT) utilizado para autenticar la solicitud.
 * @returns {Promise<object>} - Una promesa que se resuelve con el objeto de respuesta de la solicitud.
 * @throws {Error} - Si la solicitud no se puede completar correctamente.
 */
async function userData(jws: string) {
    try {

        const response = await axios.get(Global.url + "usuario",{
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

export { userData };
