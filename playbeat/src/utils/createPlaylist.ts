import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

/**
 * Función para crear una lista de reproducción (playlist) en el servidor utilizando una solicitud POST.
 * Los datos de la lista de reproducción se envían como un objeto JSON.
 *
 * @param {Object} data - Los datos de la lista de reproducción que se van a crear.
 * @param {string} data.nombre - El nombre de la lista de reproducción.
 * @param {string} data.descripcion - Descripción de la lista de reproducción.
 * @param {boolean} data.esPrivada - Indicador de si la lista de reproducción es privada.
 * @param {string} data.imgLista - URL o base64 de la imagen asociada a la lista de reproducción.
 * @param {boolean} data.esAlbum - Indicador de si la lista de reproducción es un álbum.
 * @param {any} data.tipoLista - Tipo de la lista de reproducción.
 * @param {number} data.idUsuario - ID del usuario que está creando la lista de reproducción.
 * @param {number[]} data.audios - Arreglo de IDs de los audios que se añadirán a la lista de reproducción.
 * @param {string} token - Token de autenticación para la solicitud.
 *
 * @returns {Promise} - Devuelve una promesa que resuelve con la respuesta de la solicitud POST si se realiza con éxito.
 * 
 * @throws {Error} - Lanza un error si ocurre algún problema durante la solicitud.
 *
 * El token de autenticación se utiliza en la cabecera de la solicitud para autorizar la acción.
 * Los datos de la lista de reproducción se envían como un objeto JSON.
 * 
 */
async function createPlaylist(data: { nombre: string; descripcion: string; esPrivada: boolean; imgLista?: string; esAlbum: boolean; tipoLista: any; idUsuario: number; audios: number[];}, token: any) {
    try {

        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.post(Global.url + "lista", data);

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { createPlaylist };
