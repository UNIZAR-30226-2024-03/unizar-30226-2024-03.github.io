import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

/**
 * Función para obtener la información de un archivo de audio desde el servidor.
 * Utiliza una solicitud GET con autorización para recuperar la información del archivo de audio.
 *
 * @param {string} jws - Token de autenticación JWT para autorizar la solicitud.
 * @param {string} id - ID del archivo de audio del cual se va a obtener la información.
 *
 * @returns {Promise<Object>} - Devuelve una promesa que resuelve con la información del archivo de audio si la solicitud se realiza con éxito.
 * 
 * @throws {Error} - Lanza un error si ocurre algún problema durante la solicitud.
 *
 * La función establece la cabecera `Authorization` con el token proporcionado para la solicitud GET.
 * Si la solicitud se completa con éxito, devuelve la información del archivo de audio como un objeto JSON.
 * En caso de error, muestra un mensaje de error en la consola y lanza el error.
 */
async function getInfoAudio(jws: string, id:string) {
    try {;
        const response = await axios.get(Global.url + "audio/"+id,{
            headers: {
                Authorization: `Bearer ${jws}`,
            },

        });
        return response.data;
    } catch (error) {
        console.error("Error geting user data:", error);
        throw error;
    }
}

export { getInfoAudio };