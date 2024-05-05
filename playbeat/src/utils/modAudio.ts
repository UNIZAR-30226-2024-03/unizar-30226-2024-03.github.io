import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';


/**
 * Función para modificar un archivo de audio existente en el servidor.
 * Utiliza una solicitud PUT con autorización para actualizar los datos del archivo de audio.
 *
 * @param {Object} data - Los datos del archivo de audio que se van a modificar. Puede incluir las siguientes propiedades opcionales:
 * @param {string} data.titulo - Nuevo título del archivo de audio.
 * @param {boolean} data.esPrivada - Indicador de si el archivo de audio es privado.
 * @param {string} data.imgAudio - URL o base64 de la imagen asociada al archivo de audio.
 * @param {boolean} data.esAlbum - Indicador de si el archivo de audio pertenece a un álbum.
 * @param {any} data.fechaLanz - Nueva fecha de lanzamiento del archivo de audio.
 * @param {number} data.duracionSeg - Nueva duración del archivo de audio en segundos.
 * @param {any} data.cancion - Datos relacionados con la canción del archivo de audio.
 * @param {any} data.esPodcast - Indicador de si el archivo de audio es un podcast.
 * @param {string} token - Token de autenticación para la solicitud.
 * @param {string} id - ID del archivo de audio que se va a modificar.
 *
 * @returns {Promise<Object>} - Devuelve una promesa que resuelve con la respuesta de la solicitud PUT si se realiza con éxito.
 * 
 * @throws {Error} - Lanza un error si ocurre algún problema durante la solicitud.
 *
 * La función verifica si el objeto `data` no está vacío antes de proceder.
 * Establece la cabecera `Authorization` con el token proporcionado para la solicitud PUT.
 * Los datos se envían como un objeto `FormData` y la solicitud se realiza a la URL `Global.url + "audio/update/" + id`.
 * Si la solicitud se completa con éxito, devuelve la respuesta de la solicitud.
 * En caso de error, muestra un mensaje de error en la consola y lanza el error.
 */
async function modAudio(data: {titulo?: string;esPrivada?: boolean,img?: string,esAlbum?: boolean,fechaLanz?: any,duracionSeg?: number,cancion?: any, esPodcast?:any}, token: any, id:string) {

    if(Object.keys(data).length !== 0){
        try {
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            let formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            // console.log(formData)
            const response = await axios.put(Global.url + "audio/update/"+ id, formData ,  {        
                headers: {
                    "Content-Type": "multipart/form-data",            
                }
            });
            // console.log(response)
            return response;
        } catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    }
    
}

export { modAudio };
