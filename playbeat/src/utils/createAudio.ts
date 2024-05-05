import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';


/**
 * Función para crear un audio en el servidor utilizando una solicitud POST.
 * Los datos del audio se envían como un objeto de tipo `FormData`.
 *
 * @param {Object} data - Los datos del audio que se van a subir.
 * @param {string} data.titulo - El título del audio.
 * @param {boolean} data.esPrivada - Indicador de si el audio es privado.
 * @param {string} data.img - URL o base64 de la imagen asociada al audio.
 * @param {boolean} data.esAlbum - Indicador de si el audio es parte de un álbum.
 * @param {any} data.fechaLanz - Fecha de lanzamiento del audio.
 * @param {number} data.duracionSeg - Duración del audio en segundos.
 * @param {any} data.cancion - La canción o contenido del audio.
 * @param {any} data.esPodcast - Indicador de si el audio es un podcast.
 * @param {string} data.etiquetas - Etiquetas asociadas al audio, separadas por comas.
 * @param {string} data.tipoEtiqueta - Tipo de etiquetas asociadas al audio.
 * @param {string} token - Token de autenticación para la solicitud.
 *
 * @returns {Promise} - Devuelve una promesa que resuelve con la respuesta de la solicitud POST si se realiza con éxito.
 * 
 * @throws {Error} - Lanza un error si ocurre algún problema durante la solicitud.
 *
 * El token de autenticación se utiliza en la cabecera de la solicitud para autorizar la acción.
 * Los datos del audio se envían como `FormData` para incluir archivos y otros tipos de datos.
 * 
 */

async function createAudio(data: {titulo?: string;esPrivada?: boolean,img?: string,esAlbum: boolean,fechaLanz: any,duracionSeg: number,cancion: any, esPodcast:any, etiquetas?: string, tipoEtiqueta?: string, idsUsuarios?: string}, token: any) {


    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        let formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });
        const response = await axios.post(Global.url + "audio/upload", formData ,  {        
            headers: {
                "Content-Type": "multipart/form-data",            
            }
        });
        console.log(response)
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { createAudio };
