import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

/**
 * Función para obtener un archivo de audio desde el servidor.
 * Utiliza una solicitud GET con autorización para recuperar el archivo de audio como un blob.
 *
 * @param {string} jws - Token de autenticación JWT para autorizar la solicitud.
 * @param {string} id - ID del archivo de audio que se va a obtener.
 *
 * @returns {Promise<Blob>} - Devuelve una promesa que resuelve con el archivo de audio como un blob si la solicitud se realiza con éxito.
 * 
 * @throws {Error} - Lanza un error si ocurre algún problema durante la solicitud.
 *
 * La función establece la cabecera `Authorization` con el token proporcionado para la solicitud GET.
 * La respuesta de la solicitud se configura para obtener los datos como un blob (`responseType: 'blob'`).
 * Si la solicitud se completa con éxito, devuelve el archivo de audio como un blob.
 * En caso de error, muestra un mensaje de error en la consola y lanza el error.
 */
async function getAudio(jws: string, id:string) {
    try {;
        const response = await axios.get(Global.url + "audio/play/"+id,{
            headers: {
                Authorization: `Bearer ${jws}`,
            },
            responseType: 'blob' // Aquí es donde configuras la responseType a 'blob'

        });

        return response.data;
    } catch (error) {
        console.error("Error geting user data:", error);
        throw error;
    }
}

export { getAudio };