/**
 * Obtiene los seguidores de un usuario autenticado haciendo una solicitud GET al servidor.
 * @param {string} jws El token JWT (JSON Web Token) para la autenticación.
 * @returns {Promise<any>} Una promesa que se resuelve con la respuesta de la solicitud GET, que contiene los datos de los seguidores.
 * @throws {Error} Si ocurre un error durante la solicitud.
 */
import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

async function getFollowers(jws: string) {
    try {

        const response = await axios.get(Global.url + "usuario?rrss=True",{
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

export { getFollowers };
